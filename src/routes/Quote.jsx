export default function Quote() {
  return (
    <main
      style={{
        padding: '1rem 0',
        fontSize: '16px',
        fontFamily: 'Calibri',
        marginTop: '10px',
        marginBottom: '10px',
        marginRight: '20px',
        marginLeft: '20px',
      }}
    >
      <h2>Quote</h2>
      <p>
        Here is a quote from
        {' '}
        <span style={{ fontWeight: 'bold' }}>
          Muhammad ibn Musa al-Khwarizmi
        </span>
        :
      </p>
      <blockquote cite="https://www.azquotes.com/author/44490-Muhammad_ibn_Musa_al_Khwarizmi#:~:text=Muhammad%20ibn%20Musa%20al%2DKhwarizmi%20Quotes&text=When%20I%20consider%20what%20people,may%20be%20divided%20into%20units.">
        When I consider what people generally want in calculating, I found that
        it always is a number. I also observed that every number is composed of
        units, and that any number may be divided into units. Moreover, I found
        that every number which may be expressed from one to ten, surpasses the
        preceding by one unit: afterwards the ten is doubled or tripled just as
        before the units were: thus arise twenty, thirty, etc. until a hundred:
        then the hundred is doubled and tripled in the same manner as the units
        and the tens, up to a thousand;… so forth to the utmost limit of
        numeration.
      </blockquote>
    </main>
  );
}
