import type { ReactElement } from "react"
import {
	type Control,
	Controller,
	type ControllerFieldState,
	type ControllerRenderProps,
	type FieldValues,
	type Path,
} from "react-hook-form"
import {
	Field,
	FieldContent,
	FieldDescription,
	FieldError,
	FieldGroup,
	FieldLabel,
	FieldLegend,
	FieldSet,
} from "@/components/ui/field"

export type ControlFieldProps<T extends FieldValues> = {
	name: Path<T>
	control: Control<T>
	label?: string
	description?: string
	children: (
		field: ControllerRenderProps<T>,
		fieldState: ControllerFieldState
	) => ReactElement
	required?: boolean
}

export function TextControlField<T extends FieldValues>({
	name,
	control,
	label,
	description,
	children,
	required = false,
}: ControlFieldProps<T>) {
	return (
		<Controller
			control={control}
			name={name}
			render={({ field, fieldState }) => (
				<Field data-invalid={fieldState.invalid}>
					<FieldLabel className="capitalize" htmlFor={`field-${name}`}>
						{label ?? name}{" "}
						{required && <span className="text-destructive">*</span>}
					</FieldLabel>
					{children(field, fieldState)}
					{!fieldState.invalid && description && (
						<FieldDescription>{description}</FieldDescription>
					)}
					<FieldError errors={[fieldState.error]} />
				</Field>
			)}
		/>
	)
}

export function CheckboxControlField<T extends FieldValues>({
	name,
	control,
	label,
	description,
	children,
	align = "start",
}: ControlFieldProps<T> & { align?: "start" | "end" }) {
	return (
		<Controller
			control={control}
			name={name}
			render={({ field, fieldState }) => (
				<Field data-invalid={fieldState.invalid} orientation="horizontal">
					{align === "start" && children(field, fieldState)}
					<FieldContent>
						<FieldLabel className="capitalize" htmlFor={`field-${name}`}>
							{label ?? name}
						</FieldLabel>
						{description && (
							<FieldDescription>{description}</FieldDescription>
						)}
					</FieldContent>
					{align === "end" && children(field, fieldState)}
				</Field>
			)}
		/>
	)
}

export function BooleanGroupControlField<T extends FieldValues>({
	name,
	control,
	label,
	description,
	children,
}: ControlFieldProps<T>) {
	return (
		<Controller
			control={control}
			name={name}
			render={({ field, fieldState }) => (
				<FieldSet>
					<FieldLegend className="capitalize" variant="label">
						{label ?? name}
					</FieldLegend>
					<FieldDescription>{description}</FieldDescription>
					<FieldGroup className="gap-3">
						{children(field, fieldState)}
					</FieldGroup>
				</FieldSet>
			)}
		/>
	)
}
