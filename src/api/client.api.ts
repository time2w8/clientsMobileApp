import { APIMiddleware } from "../common/utils";
import { apiUrls } from "../common/constants";

const { CLIENTS_URL } = apiUrls;

export function saveClient(body: any) {
    const url = `${CLIENTS_URL}/save`;
    return APIMiddleware.post(url, { data: body, noAuthToken: true })
}
