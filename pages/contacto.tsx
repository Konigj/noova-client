import Layout from "../components/Layout/Layout";

const Contacto = () => {
  return (
    <Layout pageTitle='Contacto'>
        <main className="container flex flex-col justify-center">
          <div className="mt-10 mx-auto">
            <div>
              <h1 className="text-2xl lg:text-4xl font-bold">Contáctanos</h1>
              <p className="opacity-90 pt-5">¿Tienes alguna duda? Llena el formulario y te responderemos tan rápido como sea posible.</p>
            </div>

            <div className="form-container my-5">
              <form action="https://formsubmit.co/contacto@noova.site" method="POST">
                <input type="hidden" name="_next" value="https://noova.site/gracias.html"/>
                <input type="hidden" name="_subject" value="Nueva solicitud Noova-contacto"/>
                <input className="hidden" type="text" name="_honey" />
                <input type="hidden" name="_template" value="table"/>

                <div className="form-name-container flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-2">
                  <h3 className="col-span-2 align-bottom lg:self-end">Nombre Completo *</h3>
                  <div className="first-name flex flex-col gap-1 lg:pr-2">
                    <input id="name" type="text" name="name"  required/>
                    <label className="text-sm opacity-70" htmlFor="name">Nombre</label>
                  </div>
                  <div className="last-name flex flex-col gap-1 lg:pl-2">
                    <input id="last-name" type="text" name="last-name"  required/>
                    <label className="text-sm opacity-70" htmlFor="last-name">Apellido</label>
                  </div>
                </div>
                
                <div className="form-email-container pt-5">
                  <h3>Correo electrónico *</h3>
                  <input type="email" name="email" size={50} required/>
                </div>

                <div className="form-request-container pt-5">
                  <h3>¿De qué trata tu solicitud? *</h3>
                  <select className="dark:text-black" name="request" id="request" size={1} required>
                    <option value="Funcionamiento y garantía">Funcionamiento y garantía</option>
                    <option value="Pagos y facturación">Pagos y facturación</option>
                    <option value="Inversiones">Inversiones</option>
                    <option value="Denunciar un perfil">Denunciar un perfil</option>
                    <option value="Denunciar un perfil">Otro</option>
                  </select>
                </div>

                <div className="form-message-container pt-5">
                  <h3>Mensaje *</h3>
                  <textarea name="message" id="message" cols={50} rows={10} required></textarea>
                </div>

                <div className="submit-button-container"> 
                  <button type="submit">Enviar</button>
                </div>
              </form>
          </div>
        </div>
        </main>
    </Layout>
  )
}

export default Contacto;