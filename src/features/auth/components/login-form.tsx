"use clinet"

import { standardSchemaResolver } from "@hookform/resolvers/standard-schema"
import { PhoneIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { useForm } from "react-hook-form"
import { InputField } from "@/components/form/fields/input-field"
import { Button } from "@/components/ui/button"
import { FieldGroup } from "@/components/ui/field"
import { useTab } from "../hooks/use-tab"
import { LoginInputSchema, type LoginInputType } from "../schemas/auth.schema"

export function LoginForm() {
	const { setTab, setPhone } = useTab()
	const { control, handleSubmit } = useForm<LoginInputType>({
		resolver: standardSchemaResolver(LoginInputSchema),
		defaultValues: {
			phone: "",
		},
	})

	const onSubmit = (data: LoginInputType) => {
		console.log(data)

		setPhone(data.phone)
		setTab("verify")
	}

	return (
		<div>
			<h1 className="text-2xl font-bold tracking-tight text-foreground">
				Welcome back
			</h1>
			<p className="mt-1.5 text-sm text-muted-foreground">
				Sign in with your phone number to continue.
			</p>

			<form className="mt-7 space-y-4" onSubmit={handleSubmit(onSubmit)}>
				<FieldGroup>
					<InputField
						field={{
							control,
							name: "phone",
							label: "Phone Number",
						}}
						placeholder="(+98) 912 000 0000"
						startAddon={<HugeiconsIcon icon={PhoneIcon} />}
					/>
					<Button className="py-6" type="submit">
						Send Verification Code
					</Button>
				</FieldGroup>
			</form>
		</div>
	)
}
