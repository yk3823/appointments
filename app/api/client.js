import { create } from "apisauce";

const apiClient = create({
    baseURL: "http://10.0.0.4:8081/api",
});

export default apiClient;
