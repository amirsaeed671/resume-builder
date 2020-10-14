import React, { useState, useRef, useEffect } from "react";
import TextInput from "components/TextInput";
import SelectInput from "components/SelectInput";
import countryList from "utils/countryList";

interface FormProps {
	submitText: string;
	handleSubmit: (data) => void;
}

interface IFormValues {
	first_name?: string;
	last_name?: string;
	email?: string;
	about?: string;
	country?: string;
	street_address?: string;
}

const Form: React.FC<FormProps> = (props: FormProps) => {
	const [formValues, setFormValues] = useState<IFormValues>({});
	const firstInput = useRef<HTMLInputElement>(null);

	useEffect(() => {
		firstInput.current.focus();
	}, []);

	const handleTextInputChange = (event) => {
		setFormValues({
			...formValues,
			[event.target.name]: event.target.value,
		});
	};

	return (
		<form
			onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
				e.preventDefault();
				props.handleSubmit(formValues);
			}}
			className="container p-4 mx-auto"
		>
			<div>
				<div className="sm:border-b sm:border-gray-200 sm:pb-4">
					<div>
						<h3 className="text-lg leading-6 font-medium text-gray-900">
							Personal Information
						</h3>
						<p className="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
							Please enter your information for your resume.
						</p>
					</div>
				</div>
				<div className="mt-2 pt-4 sm:mt-2 sm:pt-2">
					<div className="mt-6 sm:mt-5">
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 sm:gap-4 sm:gap-y-8">
							<TextInput
								onChange={handleTextInputChange}
								label="First Name"
								ref={firstInput}
								placeholder="Please enter your First Name"
								id="first_name"
							/>
							<TextInput
								className="mt-6 sm:mt-0"
								onChange={handleTextInputChange}
								label="Last Name"
								placeholder="Please enter your Last Name"
								id="last_name"
							/>
							<TextInput
								className="mt-6 sm:mt-0"
								id="email"
								placeholder="Please enter your email address"
								label="Email Address"
								onChange={handleTextInputChange}
							/>
							<TextInput
								className="mt-6 sm:mt-0"
								placeholder="Short and engaging pitch about yourself"
								label="About"
								id="about"
								onChange={handleTextInputChange}
							/>
							<SelectInput
								label="Country / Region"
								id="country"
								className="mt-6 sm:mt-0"
								options={countryList}
								onChange={handleTextInputChange}
							/>
							<TextInput
								className="mt-6 sm:mt-0"
								placeholder="Please enter your postal address"
								label="Postal address"
								id="street_address"
								onChange={handleTextInputChange}
							/>
						</div>
					</div>
				</div>
				<div className="mt-8 border-t border-gray-200 pt-8 sm:mt-5 sm:pt-10">
					<div>
						<h3 className="text-lg leading-6 font-medium text-gray-900">
							Education
						</h3>
						<p className="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
							Please enter your education information
						</p>
					</div>
					<div className="mt-6 sm:mt-5">
						<div className="sm:border-t sm:border-gray-200 sm:pt-5">
							<div role="group" aria-labelledby="label-email">
								<div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-baseline">
									<div>
										<div
											className="text-base leading-6 font-medium text-gray-900 sm:text-sm sm:leading-5 sm:text-gray-700"
											id="label-email"
										>
											By Email
										</div>
									</div>
									<div className="mt-4 sm:mt-0 sm:col-span-2">
										<div className="max-w-lg">
											<div className="relative flex items-start">
												<div className="flex items-center h-5">
													<input
														id="comments"
														type="checkbox"
														className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
													/>
												</div>
												<div className="ml-3 text-sm leading-5">
													<label
														htmlFor="comments"
														className="font-medium text-gray-700"
													>
														Comments
													</label>
													<p className="text-gray-500">
														Get notified when
														someones posts a comment
														on a posting.
													</p>
												</div>
											</div>
											<div className="mt-4">
												<div className="relative flex items-start">
													<div className="flex items-center h-5">
														<input
															id="candidates"
															type="checkbox"
															className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
														/>
													</div>
													<div className="ml-3 text-sm leading-5">
														<label
															htmlFor="candidates"
															className="font-medium text-gray-700"
														>
															Candidates
														</label>
														<p className="text-gray-500">
															Get notified when a
															candidate applies
															for a job.
														</p>
													</div>
												</div>
											</div>
											<div className="mt-4">
												<div className="relative flex items-start">
													<div className="flex items-center h-5">
														<input
															id="offers"
															type="checkbox"
															className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
														/>
													</div>
													<div className="ml-3 text-sm leading-5">
														<label
															htmlFor="offers"
															className="font-medium text-gray-700"
														>
															Offers
														</label>
														<p className="text-gray-500">
															Get notified when a
															candidate accepts or
															rejects an offer.
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="mt-6 sm:mt-5 sm:border-t sm:border-gray-200 sm:pt-5">
							<div
								role="group"
								aria-labelledby="label-notifications"
							>
								<div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-baseline">
									<div>
										<div
											className="text-base leading-6 font-medium text-gray-900 sm:text-sm sm:leading-5 sm:text-gray-700"
											id="label-notifications"
										>
											Push Notifications
										</div>
									</div>
									<div className="sm:col-span-2">
										<div className="max-w-lg">
											<p className="text-sm leading-5 text-gray-500">
												These are delivered via SMS to
												your mobile phone.
											</p>
											<div className="mt-4">
												<div className="flex items-center">
													<input
														id="push_everything"
														name="push_notifications"
														type="radio"
														className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
													/>
													<label
														htmlFor="push_everything"
														className="ml-3"
													>
														<span className="block text-sm leading-5 font-medium text-gray-700">
															Everything
														</span>
													</label>
												</div>
												<div className="mt-4 flex items-center">
													<input
														id="push_email"
														name="push_notifications"
														type="radio"
														className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
													/>
													<label
														htmlFor="push_email"
														className="ml-3"
													>
														<span className="block text-sm leading-5 font-medium text-gray-700">
															Same as email
														</span>
													</label>
												</div>
												<div className="mt-4 flex items-center">
													<input
														id="push_nothing"
														name="push_notifications"
														type="radio"
														className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
													/>
													<label
														htmlFor="push_nothing"
														className="ml-3"
													>
														<span className="block text-sm leading-5 font-medium text-gray-700">
															No push
															notifications
														</span>
													</label>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="mt-8 border-t border-gray-200 pt-5">
				<div className="flex justify-start">
					<span className="ml-3 inline-flex rounded-md shadow-sm">
						<button
							type="submit"
							data-testid="submit-button"
							className="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
						>
							{props.submitText}
						</button>
					</span>
				</div>
			</div>
		</form>
	);
};

export default Form;
