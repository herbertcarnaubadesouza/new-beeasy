import Button from "@/components/Buttons/Button";
import Input from "@/components/Inputs/Input";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../styles/CriarConta.module.scss";

export default function CriarConta() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleCreateAccount = async () => {
    setIsLoading(true);

    if (password !== confirmPassword) {
      // toast.error("As senhas não coincidem.");
      alert("As senhas não coincidem.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/create-account", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // toast.success(data.message);
        alert(data.message);
        router.push("/dashboard");
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      if (error instanceof Error) {
        // toast.error(error.message);
        alert(error.message);
      } else {
        // toast.error("Ocorreu um erro ao criar a conta.");
        alert("Ocorreu um erro ao criar a conta.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.Container}>
      <div className={styles.LoginContainer}>
        <div className={styles.Login}>
          <div className={styles["input-container"]}>
            <p className={styles.title}>Criar conta</p>
            <p className={styles.subtitle}>Preencha abaixo para criar conta</p>

            <Input
              id="nome"
              label="Seu nome"
              className={styles.field}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <Input
              id="email"
              label="Email"
              className={styles.field}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              id="password"
              label="Senha"
              className={styles.field}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Input
              id="confirm-password"
              label="Confirmar senha"
              className={styles.field}
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <Button
              label="Criar conta"
              variant="secondary"
              className={styles.button}
              isLoading={isLoading}
              onClick={handleCreateAccount}
            />
          </div>

          <div className={styles.sign}>
            <p className={styles.signNew}>Já possui uma conta? </p>
            <Link href="/" className={styles.create}>
              Fazer login
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.ImageContainer}>
        <img className={styles.logo} src="/logoBeasy.svg" alt="logo" />
      </div>
    </div>
  );
}
