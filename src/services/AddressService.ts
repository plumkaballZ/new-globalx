import { httpRequestService } from './HttpRequestService';
import { Address } from '../models/Address';
import { apiEndpoint } from './../settings/ApiEndpoints';
import { LocalUser } from '../models/LocalUser';


class AddressService {
    private apiUrl = `${apiEndpoint}/api/address`;


    public deleteAddress = async (address: Address, allAddresses: Address[], setAllAddresses: any) => {
        let res = await this.delete(address.uid)
            .catch((err: any) => {
                console.log(err);
            });

        if (res === true) {
            let removedAddressIndex = allAddresses.indexOf(address);
            allAddresses.splice(removedAddressIndex, 1);
            setAllAddresses([...allAddresses]);
        }
    }

    public async upsertAddress(upsertAddress: Address, setSelectedAddress: any, allAddresses: Address[], setAllAddresses: any, setShippingOptions: any) {

        upsertAddress.ip = LocalUser.getIp();

        const res = await httpRequestService
            .post(`${this.apiUrl}`, upsertAddress);

        if (!res) return;
        if (!res.address) return;

        let newAddress = res.address;
        setSelectedAddress(newAddress);

        allAddresses.push(newAddress);
        setAllAddresses([...allAddresses]);

        let shippingOptions = res.shippingOptions;

        if (shippingOptions) {
            setShippingOptions(shippingOptions);
        }
    }

    public fetchAllAddresses = async (setAllAddresses: any, setAddressUid: any, setShippingOptions: any) => {

        let res = await this.getAll()
            .catch((err: any) => {
                console.log(err);
            });

        if (!res) return;
        if (!res.allAddresses) return;

        let firstAddress = res.allAddresses[0];

        if (firstAddress) {
            setAddressUid(firstAddress);
        }

        setAllAddresses(res.allAddresses);

        let shippingOptions = res.shippingOptions;

        if (shippingOptions) {
            setShippingOptions(shippingOptions);
        }

    }
    public fetchAllShippingOptions = async (selectedAddress: Address, setShippingOptions: any) => {
        const res = await httpRequestService
            .post(`${this.apiUrl}/getshippingoptions`, selectedAddress);

        if (!res) return;

        if (res) {
            setShippingOptions(res);
        }
    }

    private getAll(): Promise<any> {

        let ip = LocalUser.getIp();
        let email = LocalUser.getEmail();

        let userId = email === null ? ip : email;

        return httpRequestService
            .get<any[]>(`${this.apiUrl}/getall/${userId}`)
            .then(res => {
                return res;
            });
    }

    private delete(addressUid: string): Promise<boolean> {
        return httpRequestService
            .get<boolean>(`${this.apiUrl}/delete/${addressUid}`)
            .then(res => {
                return res;
            });
    }
}

export const addressService = new AddressService();