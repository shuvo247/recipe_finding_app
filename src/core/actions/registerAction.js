const registerAction = async ( { request, params } ) => {
    switch (request.method) {
        case "POST": {
          let formData = await request.formData();
          let name = formData.get("name");
          let email = formData.get("email");
          let password = formData.get("password");
          return { email, password, name };
        }
        default: {
          throw new Response("", { status: 405 });
        }
    }
}
export default registerAction;