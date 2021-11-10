const Colors = () => (
  <div>
    <div
      style={{
        width: '100%',
        backgroundColor: 'var(--black)',
        padding: 50,
      }}
    >
      <Sector color="var(--black)" />
      <Sector color="var(--white)" />
      <Sector color="var(--purple)" />
      <Sector color="var(--violet)" />

      <Sector color="var(--magenta)" />

      <Sector color="var(--orange)" />
    </div>
    <div
      style={{
        width: '100%',
        backgroundColor: 'var(--purple)',
        padding: 50,
      }}
    >
      <Sector color="var(--black)" />
      <Sector color="var(--white)" />
      <Sector color="var(--purple)" />
      <Sector color="var(--violet)" />

      <Sector color="var(--magenta)" />

      <Sector color="var(--orange)" />
    </div>
    <div
      style={{
        width: '100%',
        backgroundColor: 'var(--white)',
        padding: 50,
      }}
    >
      <Sector color="var(--black)" />
      <Sector color="var(--white)" />
      <Sector color="var(--purple)" />
      <Sector color="var(--violet)" />

      <Sector color="var(--magenta)" />

      <Sector color="var(--orange)" />
    </div>
    <div
      style={{
        width: '100%',
        backgroundColor: 'var(--magenta)',
        padding: 50,
      }}
    >
      <Sector color="var(--black)" />
      <Sector color="var(--white)" />
      <Sector color="var(--purple)" />
      <Sector color="var(--violet)" />

      <Sector color="var(--magenta)" />

      <Sector color="var(--orange)" />
    </div>
    <div
      style={{
        width: '100%',
        backgroundColor: 'var(--violet)',
        padding: 50,
      }}
    >
      <Sector color="var(--black)" />
      <Sector color="var(--white)" />
      <Sector color="var(--purple)" />
      <Sector color="var(--violet)" />

      <Sector color="var(--magenta)" />

      <Sector color="var(--orange)" />
    </div>
    <div
      style={{
        width: '100%',
        backgroundColor: 'var(--orange)',
        padding: 50,
      }}
    >
      <Sector color="var(--black)" />
      <Sector color="var(--white)" />
      <Sector color="var(--purple)" />
      <Sector color="var(--violet)" />

      <Sector color="var(--magenta)" />

      <Sector color="var(--orange)" />
    </div>
    <div
      style={{
        width: '100%',
        backgroundColor: 'var(--purple)',
        padding: 50,
      }}
    >
      <Sector color="var(--black)" />
      <Sector color="var(--white)" />
      <Sector color="var(--purple)" />
      <Sector color="var(--violet)" />

      <Sector color="var(--magenta)" />

      <Sector color="var(--orange)" />
    </div>
    <div
      style={{
        width: '100%',
        backgroundColor: 'var(--red)',
        padding: 50,
      }}
    >
      <Sector color="var(--black)" />
      <Sector color="var(--white)" />
      <Sector color="var(--purple)" />
      <Sector color="var(--violet)" />

      <Sector color="var(--magenta)" />

      <Sector color="var(--orange)" />
    </div>
  </div>
);

export default Colors;

const Button = ({ backgroundColor, color }) => {
  return (
    <button
      style={{
        padding: 15,
        backgroundColor: backgroundColor,
        borderRadius: 4,
        color: color,
        marginRight: 20,
      }}
    >
      Click me!
    </button>
  );
};

const Sector = ({ color }) => {
  return (
    <div
      style={{
        color: color,
      }}
    >
      <h2 style={{ marginTop: 50 }}>Hello everybody!</h2>
      <p style={{ marginTop: 20, marginBottom: 20 }}>
        Elo Melo Leszcze Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Nesciunt excepturi nam quis? Quaerat magni provident officia
        temporibus voluptatum pariatur placeat repellat ad nulla quos qui ipsum,
        dolorem asperiores magnam earum. Elo Melo Leszcze Lorem ipsum dolor sit
        amet consectetur adipisicing elitxcepturi nam quis? Quaerat magni
        provident officia temporibus voluptatum pariatur placeat repellat ad
        nulla quos qui ipsum, dolorem asperiores magnam earum. Elo Melo Leszcze
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
        excepturi nam quis? Quaerat magni provident officia temporibus
        voluptatum pari
      </p>
      <Button backgroundColor={color} color="var(--black)" />
      <Button backgroundColor={color} color="var(--white)" />
      <Button backgroundColor={color} color="var(--orange)" />
    </div>
  );
};
