import login from "./Rules";

const metodos = {
    login: async (comando) => {
        const url = "/login";
        return login
        .post(url, comando)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
    }
}

export default metodos;