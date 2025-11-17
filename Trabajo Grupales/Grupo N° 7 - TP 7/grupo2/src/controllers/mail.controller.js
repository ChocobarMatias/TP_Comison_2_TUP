const { enviarMailTest } = require('../service/email.service');

const testMailController = async (req, res) => {
    try {
        const { mail } = req.body;

        if (!mail) {
            return res.status(400).json({ message: "Debes proporcionar un email" });
        }

        await enviarMailTest(mail);

        return res.status(200).json({ message: "Email de prueba enviado exitosamente" });
    } catch (error) {
        console.error("Error al enviar email de prueba:", error);

        return res.status(500).json({
            message: "Error al enviar el email de prueba",
            error: error.message
        });
    }
};

module.exports = { testMailController };
