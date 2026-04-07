"use client"
import { useState, useEffect } from "react"
import styles from "./page.module.css"

export default function Home() {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [usuarios, setUsuarios] = useState<any[]>([])

  async function carregarUsuarios() {
    const response = await fetch("/api/usuarios")
    const data = await response.json()
    setUsuarios(data)
  }

  useEffect(() => {
    carregarUsuarios()
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    await fetch("/api/usuarios", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ nome, email })
    })

    setNome("")
    setEmail("")

    await carregarUsuarios()
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>

        <div className={styles.intro}>
          <h1>Cadastro de Usuário</h1>
          <p>Preencha os dados abaixo</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            className={styles.input}
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <input
            className={styles.input}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button className={styles.button} type="submit">
            Cadastrar
          </button>
        </form>

        <ul className={styles.lista}>
          {usuarios.map((user) => (
            <li className={styles.item} key={user._id?.toString()}>
              <span className={styles.nome}>{user.nome}</span>
              <span className={styles.email}>{user.email}</span>
            </li>
          ))}
        </ul>

      </main>
    </div>
  )
}