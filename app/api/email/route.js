import nodemailer from "nodemailer";

export const POST = async (req) => {
  const body = await req.json(); // Obtén los datos del cuerpo de la solicitud

  const { name, email, message } = body;

  if (!name || !email || !message) {
    return new Response(
      JSON.stringify({ message: "All fields are required" }),
      { status: 400 }
    );
  }

  try {
    // Define los colores
    const brandGreen = "#62A92B";
    const backgroundColor = "#272730";
    const textColor = "#FFFFFF";

    const transporter = nodemailer.createTransport({
      service: "Gmail", // Cambiar según el servicio que uses
      auth: {
        user: process.env.EMAIL_USER, // Usuario de la variable de entorno
        pass: process.env.EMAIL_PASS, // Contraseña de la variable de entorno
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_RECEIVER, // Correo de destino desde la variable de entorno
      subject: `${name} en la web UPDAVO`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: ${textColor}; max-width: 600px; margin: auto; border-radius: 10px; padding: 20px; background: ${backgroundColor};">
          <div style="text-align: center; margin-bottom: 20px;">
            <img src="cid:logo" alt="Logo" style="max-width: 150px;">
          </div>
          <h2 style="color: ${brandGreen}; text-align: center; margin-bottom: 20px;">Nuevo Mensaje de la Web UPDAVO</h2>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mensaje:</strong></p>
          <p style="border-left: 4px solid ${brandGreen}; padding-left: 10px; background: #333; border-radius: 5px; box-shadow: 0 0 5px rgba(0,0,0,0.3); color: ${textColor}; padding: 10px;">
            ${message}
          </p>
          <hr style="border: none; border-top: 1px solid ${brandGreen}; margin: 20px 0;">
          <p style="font-size: 14px; color: ${textColor}; text-align: center;">
            Este mensaje fue enviado desde el formulario de contacto en la web UPDAVO.
          </p>
        </div>
      `,
      attachments: [
        {
          filename: "blanco2.png", // Nombre del archivo del logo
          path: "./public/assets/imgs/logos/blanco2.png", // Ruta del archivo en tu proyecto
          cid: "logo", // Identificador para usar en el HTML
        },
      ],
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Email sent successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Error sending email." }), {
      status: 500,
    });
  }
};
