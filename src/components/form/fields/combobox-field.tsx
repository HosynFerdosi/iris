import { type ComponentProps, Fragment, type ReactNode } from "react"
import type { FieldValues } from "react-hook-form"
import {
	Combobox,
	ComboboxChip,
	ComboboxChips,
	ComboboxChipsInput,
	ComboboxCollection,
	ComboboxContent,
	ComboboxEmpty,
	ComboboxGroup,
	ComboboxInput,
	ComboboxItem,
	ComboboxLabel,
	ComboboxList,
	ComboboxValue,
	useComboboxAnchor,
} from "@/components/ui/combobox"
import { InputGroupAddon } from "@/components/ui/input-group"
import { type ControlFieldProps, TextControlField } from "../controller"

export type ComboboxFieldProps<T extends FieldValues> = {
	field: Omit<ControlFieldProps<T>, "children">
	items?: string[]
	groups?: {
		value: string
		items: string[]
	}[]
	multiple?: boolean
	showClear?: boolean
	empty?: ReactNode
	startAddon?: ReactNode
} & ComponentProps<typeof ComboboxInput>

function ComboboxField<T extends FieldValues>({
	field,
	items,
	groups,
	multiple = false,
	showClear,
	empty,
	startAddon,
	...props
}: ComboboxFieldProps<T>) {
	const anchor = useComboboxAnchor()

	return (
		<TextControlField {...field}>
			{({ value, onChange, ...control }, fieldState) => (
				<Combobox
					items={items ?? groups}
					multiple={multiple}
					onValueChange={onChange}
					value={value}
					{...control}
				>
					{multiple ? (
						<ComboboxChips className="w-full" ref={anchor}>
							<ComboboxValue>
								{(values) => (
									<Fragment>
										{values.map((value: string) => (
											<ComboboxChip key={value}>
												{value}
											</ComboboxChip>
										))}
										<ComboboxChipsInput
											{...props}
											aria-invalid={fieldState.invalid}
											placeholder={
												values.length === 0 ? props.placeholder : ""
											}
										/>
									</Fragment>
								)}
							</ComboboxValue>
						</ComboboxChips>
					) : (
						<ComboboxInput
							{...props}
							aria-invalid={fieldState.invalid}
							showClear={showClear}
						>
							{startAddon && (
								<InputGroupAddon>{startAddon}</InputGroupAddon>
							)}
						</ComboboxInput>
					)}

					<ComboboxContent anchor={anchor}>
						<ComboboxEmpty>{empty ?? "No items found."}</ComboboxEmpty>
						{items && (
							<ComboboxList>
								{(item) => (
									<ComboboxItem key={item} value={item}>
										{item}
									</ComboboxItem>
								)}
							</ComboboxList>
						)}
						{groups && (
							<ComboboxList>
								{(group) => (
									<ComboboxGroup items={group.items} key={group.value}>
										<ComboboxLabel>{group.value}</ComboboxLabel>
										<ComboboxCollection>
											{(item) => (
												<ComboboxItem key={item} value={item}>
													{item}
												</ComboboxItem>
											)}
										</ComboboxCollection>
									</ComboboxGroup>
								)}
							</ComboboxList>
						)}
					</ComboboxContent>
				</Combobox>
			)}
		</TextControlField>
	)
}

export { ComboboxField }
