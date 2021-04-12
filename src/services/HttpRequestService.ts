class HttpRequestService {
    private fetchOptions: RequestInit = {
        cache: 'no-store',
        credentials: 'same-origin',
        headers: new Headers({
            'Cache-Control': 'no-cache',
            Pragma: 'no-cache'
        })
    }

    public async get<T>(url: string): Promise<T> {
        const res = await fetch(
            url,
            this.fetchOptions
        );

        if (!res.ok) {
            throw new Error(`${res.status}`);
        }

        const result = await res.json();

        return result;
    }

    public async put<T>(url: string, postobj: object): Promise<boolean> {
        const res = await fetch(
            url,
            {
                ...this.fetchOptions,
                method: 'put',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(postobj)
            }
        );

        if (!res.ok) {
            throw new Error(`${res.status}`);
        }

        return Promise.resolve(true);
    }

    public async delete(url: string): Promise<boolean> {
        const res = await fetch(
            url,
            { ...this.fetchOptions, method: 'delete' }
        );

        if (!res.ok) {
            throw new Error(`${res.status}`);
        }

        return Promise.resolve(true);
    }

    public post = async (url: string, content?: object): Promise<any> => {
        const response = await fetch(url, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: "same-origin",
            method: 'POST',
            body: JSON.stringify(content)
        });

        const res = this.checkStatus(response);
        const data = res.json();

        return data;
    }
    private checkStatus = (response: Response): Response => {
        if (response.status === 204) {
            return new Response(JSON.stringify(''), {
                headers: { "Content-type": "text/json" }
            });
        }
        if (response.status >= 200 && response.status < 300) {
            return response;
        }
        else {
            const error = new Error(response.statusText);
            throw error;
        }
    }
}

export const httpRequestService = new HttpRequestService();