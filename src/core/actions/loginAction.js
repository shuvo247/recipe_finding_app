const loginAction = async ( { request, params } ) => {
    switch (request.method) {
        case "POST": {
          let formData = await request.formData();
          let email = formData.get("email");
          let password = formData.get("password");
          return { email, password };
        }
        default: {
          throw new Response("", { status: 405 });
        }
    }
}
export default loginAction;