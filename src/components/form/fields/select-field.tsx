import type { FieldValues } from "react-hook-form"
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import { type ControlFieldProps, TextControlField } from "../controller"

type FieldOptions = {
	label: string
	value: string
	description?: string
	disabled?: boolean
}

type SelectFieldProps<T extends FieldValues> = {
	field: Omit<ControlFieldProps<T>, "children">
	options?: Omit<FieldOptions, "description">[]
	groups?: {
		label: string
		options: Omit<FieldOptions, "description">[]
	}[]
	placeholder?: string
}

function SelectField<T extends FieldValues>({
	field,
	options,
	groups,
	...props
}: SelectFieldProps<T>) {
	return (
		<TextControlField {...field}>
			{({ value, onChange, ...control }, fieldState) => (
				<Select
					items={options}
					onValueChange={onChange}
					value={value}
					{...control}
				>
					<SelectTrigger aria-invalid={fieldState.invalid}>
						<SelectValue {...props} className="capitalize" />
					</SelectTrigger>
					{options && (
						<SelectContent>
							<SelectGroup>
								{options.map((item) => (
									<SelectItem key={item.value} {...item}>
										{item.label}
									</SelectItem>
								))}
							</SelectGroup>
						</SelectContent>
					)}
					{groups && (
						<SelectContent>
							{groups.map(({ label, options }) => (
								<SelectGroup key={label}>
									<SelectLabel>{label}</SelectLabel>
									{options.map((item) => (
										<SelectItem key={item.value} {...item}>
											{item.label}
										</SelectItem>
									))}
								</SelectGroup>
							))}
						</SelectContent>
					)}
				</Select>
			)}
		</TextControlField>
	)
}

export { SelectField }
