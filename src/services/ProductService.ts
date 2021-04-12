import { httpRequestService } from './HttpRequestService';
import { Product } from '../models/Product';
import { apiEndpoint } from './../settings/ApiEndpoints';

class ProductService {
    private apiUrl = `${apiEndpoint}/api/product`;

    private getAll(): Promise<Product[]> {
        return httpRequestService
            .get<Product[]>(`${this.apiUrl}/getall`)
            .then(prods => {
                return prods;
            });
    }

    public fetchAllProducts = async (setAllProducts: any) => {
        
        let allProducts = await this.getAll()
            .catch((err: any) => {
                console.log(err);
            });

        if (!allProducts) return;
        setAllProducts(allProducts);
    }
}

export const productService = new ProductService();