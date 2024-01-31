import Button from "@/components/Buttons/Button";
import Input from "@/components/Inputs/Input";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../styles/Login.module.scss";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleLogin = async () => {
    setIsLoading(true);

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("userData", JSON.stringify(data.user));

        alert("Logado com sucesso!");
        router.push("/dashboard");
      } else {
        alert("O email ou senha estão incorretos!");
        throw new Error(data.error);
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.Container}>
      <div className={styles.ImageContainer}>
        <img className={styles.logo} src="/logoBeasy.svg" alt="logo" />
      </div>
      <div className={styles.LoginContainer}>
        <div className={styles.Login}>
          <div className={styles["input-container"]}>
            <p className={styles.title}>Login</p>
            <p className={styles.subtitle}>Informe seu acesso para entrar</p>

            <Input
              id="email"
              label="Email"
              className={styles.field}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              id="senha"
              label="Senha"
              className={styles.field}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Link href="/recuperar" className={styles.forget}>
              Esqueci minha senha
            </Link>

            <Button
              label="Entrar"
              variant="secondary"
              className={styles.button}
              isLoading={isLoading}
              onClick={handleLogin}
            />
          </div>

          <div className={styles.sign}>
            <p className={styles.signNew}>Ainda não tem uma conta? </p>
            <Link href="/criar-conta" className={styles.create}>
              Criar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
