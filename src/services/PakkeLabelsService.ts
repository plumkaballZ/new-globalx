import { httpRequestService } from './HttpRequestService';
import { apiEndpoint } from './../settings/ApiEndpoints';
import { OrderOverview } from '../models/OrderOverview';

class PakkeLabelsService {
    private apiUrl = `${apiEndpoint}/api/pakkelabels`;

    public async createShipment(orderOverview: OrderOverview): Promise<boolean> {
        console.log(orderOverview);
        const res = await httpRequestService
            .post(this.apiUrl, orderOverview);

        return res as boolean;
    }
}
export const pakkeLabelsService = new PakkeLabelsService();