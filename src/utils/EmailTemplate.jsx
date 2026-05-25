export const EmailTemplate = ({ name, email, message }) => (
  <div>
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '50px',
      }}
    >
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>
        Portafolio{' '}
        <span style={{ borderBottom: '6px solid #77DDA0' }}>José Manuel</span>
      </h1>
    </div>

    <p>
      <strong>Enviado por:</strong> {name}
    </p>
    <p>
      <strong>Correo Electrónico:</strong> {email}
    </p>

    <p style={{ marginTop: '50px' }}>
      <strong>Mensaje:</strong> <br />
      {message}
    </p>
  </div>
);
