import React from "react";

interface FormProps {
	submitText: string;
	handleSubmit: (data) => void;
}

const Form: React.FC<FormProps> = (props: FormProps) => {
	return (
		<form
			onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
				e.preventDefault();
				props.handleSubmit({});
			}}
			className="container p-4 mx-auto"
		>
			<div>
				<div>
					<div>
						<h3 className="text-lg leading-6 font-medium text-gray-900">
							Personal Information
						</h3>
						<p className="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
							Please enter your information for your resume.
						</p>
					</div>
				</div>
				<div className="mt-2 pt-4 sm:mt-2 sm:pt-4">
					<div className="mt-6 sm:mt-5">
						<div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
							<label
								htmlFor="first_name"
								className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
							>
								First name
							</label>
							<div className="mt-1 sm:mt-0 sm:col-span-2">
								<div className="max-w-lg rounded-md shadow-sm sm:max-w-xs">
									<input
										id="first_name"
										className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
									/>
								</div>
							</div>
						</div>
						<div className="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
							<label
								htmlFor="last_name"
								className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
							>
								Last name
							</label>
							<div className="mt-1 sm:mt-0 sm:col-span-2">
								<div className="max-w-lg rounded-md shadow-sm sm:max-w-xs">
									<input
										id="last_name"
										className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
									/>
								</div>
							</div>
						</div>

						<div className="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
							<label
								htmlFor="email"
								className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
							>
								Email address
							</label>
							<div className="mt-1 sm:mt-0 sm:col-span-2">
								<div className="max-w-lg rounded-md shadow-sm">
									<input
										id="email"
										type="email"
										className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
									/>
								</div>
							</div>
						</div>
						<div className="mt-6 sm:mt-5">
							<div className="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
								<label
									htmlFor="about"
									className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
								>
									About
								</label>
								<div className="mt-1 sm:mt-0 sm:col-span-2">
									<div className="max-w-lg flex rounded-md shadow-sm">
										<textarea
											id="about"
											rows={3}
											className="form-textarea block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
											defaultValue={""}
										/>
									</div>
									<p className="mt-2 text-sm text-gray-500">
										Write a few sentences about yourself.
									</p>
								</div>
							</div>
							<div className="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center sm:border-t sm:border-gray-200 sm:pt-5">
								<label
									htmlFor="photo"
									className="block text-sm leading-5 font-medium text-gray-700"
								>
									Photo
								</label>
								<div className="mt-2 sm:mt-0 sm:col-span-2">
									<div className="flex items-center">
										<span className="h-12 w-12 rounded-full overflow-hidden bg-gray-100">
											<svg
												className="h-full w-full text-gray-300"
												fill="currentColor"
												viewBox="0 0 24 24"
											>
												<path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
											</svg>
										</span>
										<span className="ml-5 rounded-md shadow-sm">
											<button
												type="button"
												className="py-2 px-3 border border-gray-300 rounded-md text-sm leading-4 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"
											>
												Change
											</button>
										</span>
									</div>
								</div>
							</div>
						</div>
						<div className="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
							<label
								htmlFor="country"
								className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
							>
								Country / Region
							</label>
							<div className="mt-1 sm:mt-0 sm:col-span-2">
								<div className="max-w-lg rounded-md shadow-sm sm:max-w-xs">
									<select
										id="country"
										className="block form-select w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
									>
										<option>United States</option>
										<option>Canada</option>
										<option>Mexico</option>
									</select>
								</div>
							</div>
						</div>
						<div className="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
							<label
								htmlFor="street_address"
								className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
							>
								Street address
							</label>
							<div className="mt-1 sm:mt-0 sm:col-span-2">
								<div className="max-w-lg rounded-md shadow-sm">
									<input
										id="street_address"
										className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
									/>
								</div>
							</div>
						</div>
						<div className="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
							<label
								htmlFor="city"
								className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
							>
								City
							</label>
							<div className="mt-1 sm:mt-0 sm:col-span-2">
								<div className="max-w-lg rounded-md shadow-sm sm:max-w-xs">
									<input
										id="city"
										className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
									/>
								</div>
							</div>
						</div>
						<div className="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
							<label
								htmlFor="state"
								className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
							>
								State / Province
							</label>
							<div className="mt-1 sm:mt-0 sm:col-span-2">
								<div className="max-w-lg rounded-md shadow-sm sm:max-w-xs">
									<input
										id="state"
										className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
									/>
								</div>
							</div>
						</div>
						<div className="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
							<label
								htmlFor="zip"
								className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
							>
								ZIP / Postal
							</label>
							<div className="mt-1 sm:mt-0 sm:col-span-2">
								<div className="max-w-lg rounded-md shadow-sm sm:max-w-xs">
									<input
										id="zip"
										className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="mt-8 border-t border-gray-200 pt-8 sm:mt-5 sm:pt-10">
					<div>
						<h3 className="text-lg leading-6 font-medium text-gray-900">
							Notifications
						</h3>
						<p className="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
							We&apos;ll always let you know about important
							changes, but you pick what else you want to hear
							about.
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
