"use client"

import { standardSchemaResolver } from "@hookform/resolvers/standard-schema"
import { ArrowLeft01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { InputField } from "@/components/form/fields/input-field"
import { Button } from "@/components/ui/button"
import { FieldGroup } from "@/components/ui/field"
import { useTab } from "../hooks/use-tab"
import { VerifyInputSchema, type VerifyInputType } from "../schemas/auth.schema"

export function VerifyForm() {
	const router = useRouter()
	const { setTab, phone, setPhone } = useTab()
	const { control, handleSubmit } = useForm<VerifyInputType>({
		resolver: standardSchemaResolver(VerifyInputSchema),
		defaultValues: {
			otp: "",
		},
	})

	const onSubmit = (data: VerifyInputType) => {
		console.log(data)

		setPhone(null)
		setTab("success")

		setTimeout(() => {
			router.push("/")
		}, 2000)
	}

	return (
		<div>
			<button
				className="mb-4 flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
				onClick={() => setTab("login")}
				type="button"
			>
				<HugeiconsIcon icon={ArrowLeft01Icon} size={15} />
				Back
			</button>
			<h1 className="text-2xl font-bold tracking-tight text-foreground">
				Enter verification code
			</h1>
			<p className="mt-1.5 text-sm text-muted-foreground">
				We sent a 6-digit code to{" "}
				<span className="text-foreground">{phone}</span>
			</p>

			<form className="mt-7" onSubmit={handleSubmit(onSubmit)}>
				<FieldGroup>
					<InputField
						autoFocus
						field={{
							control,
							name: "otp",
							label: "Verify Code",
						}}
						placeholder="Enter verify code"
					/>
					<Button className="mt-6 w-full" size="lg" type="submit">
						Verify & continue
					</Button>
				</FieldGroup>
			</form>

			<div className="mt-5 text-center text-sm text-muted-foreground">
				<button
					className="font-medium text-accent-gold hover:underline"
					type="button"
				>
					Resend code
				</button>
			</div>
		</div>
	)
}
