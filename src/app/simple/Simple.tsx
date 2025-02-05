type TSimpleTemplate = { title: string , website: string }

export function SimpleTemplate({ t }: { t: TSimpleTemplate }) {
  return (
    <div
      style={{
        background: '#f8fafc',  color: '#334155',
        width: '100%', height: '100%',
        display: 'flex',  alignItems: 'center', 
        justifyContent: 'center', padding: "24px",
      }}
    >
      <div style={{
        margin: '6px', padding: "24px", width: "100%",
        borderRadius: "24px", height: "100%", fontSize: 72, 
        display: "flex", flexDirection: "column",
        border: `#334155 2px solid`, color: '#334155'
      }}>
        {t.title?.slice(0, 80)}
        <hr style={{ border: `#334155 1px solid`, width: "100%" }}></hr>
        <p style={{ fontSize: "52", fontWeight: "700", display: 'flex',
           justifyContent: 'center', color: '#334155' }}> {t.website}</p>
      </div>
    </div>
  )
}
