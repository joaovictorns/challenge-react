import React from "react";
import { Text, Button, Card, Separator } from "@amigoapp/doca-react";
import amigoLogo from "../assets/amigo-icon-small.svg";

function UserDetails({ formData, onBack }) {
	return (
		<div>
			<div className="doca-flex doca-justify-center doca-p-2" />
			<div
				className="doca-flex doca-items-center doca-justify-center doca-p-4"
				style={{ borderBottom: "1px solid #d9e1e8" }}
			>
				<img className="doca-flex" src={amigoLogo} />
				<p className="doca-text--info doca-text--bold doca-ml-2 doca-text--large">
					Informações
				</p>
			</div>
			<div className="doca-flex doca-page doca-justify-center doca-p-2 ">
				<Card
					borderless={false}
					onClick={function noRefCheck() {}}
					variant="default"
				>
					<Card.Content>
						<p>Nome: {formData.name}</p>
						<Separator />
						<p>Email: {formData.email}</p>
						<Separator />
						<p>Senha: {formData.password}</p>
						<Separator />
						<p>Confirmação de Senha: {formData.confirmPassword}</p>
						<Separator />
						<Button
							iconLeft="arrow-left"
							onClick={function noRefCheck() {}}
							size="small"
							variant="dark"
							onClick={onBack}
						>
							Voltar
						</Button>
					</Card.Content>
				</Card>
			</div>
		</div>
	);
}

export default UserDetails;
