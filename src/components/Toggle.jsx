function Toggle({ darkMode, setDarkMode }) {
  return (
    <button onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? "☀️ Mode clair" : "🌙 Mode sombre"}
    </button>
  )
}

export default Toggle