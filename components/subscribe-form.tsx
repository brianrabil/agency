import { MailIcon } from "lucide-react";

export default function SubscribeForm() {
	return (
		<>
			<div className="relative flex items-center justify-center gap-10 before:h-px before:w-full before:border-b before:[border-image:linear-gradient(to_right,transparent,--theme(--color-indigo-300/.16),transparent)1] before:shadow-none after:h-px after:w-full after:border-b after:[border-image:linear-gradient(to_right,transparent,--theme(--color-indigo-300/.16),transparent)1] after:shadow-xs after:shadow-none mb-11">
				<div className="w-full max-w-xs mx-auto shrink-0">
					<form className="relative">
						{/* Border with dots in corners */}
						<div
							className="absolute -inset-3 bg-transparent bg-linear-to-b from-gray-700/80 to-gray-700/70 rounded-lg -z-10 before:absolute before:inset-y-0 before:left-0 before:w-[15px] before:bg-[length:15px_15px] before:[background-position:top_center,bottom_center] before:bg-no-repeat before:[background-image:radial-gradient(circle_at_center,var(--color-gray-600)_1.5px,transparent_1.5px),radial-gradient(circle_at_center,var(--color-gray-600)_1.5px,transparent_1.5px)] after:absolute after:inset-y-0 after:right-0 after:w-[15px] after:bg-[length:15px_15px] after:[background-position:top_center,bottom_center] after:bg-no-repeat after:[background-image:radial-gradient(circle_at_center,var(--color-gray-600)_1.5px,transparent_1.5px),radial-gradient(circle_at_center,var(--color-gray-600)_1.5px,transparent_1.5px)]"
							aria-hidden="true"
						/>
						<div className="space-y-3">
							<div>
								<label className="sr-only" htmlFor="email">
									Email
								</label>
								<div className="relative">
									<div className="absolute inset-y-0 left-0 text-gray-400/70 pl-4 flex items-center pointer-events-none">
										<MailIcon className="h-4 w-4" />
									</div>
									<input
										id="email"
										className="form-input text-sm w-full pl-10 pr-4"
										type="email"
										placeholder="Your email..."
										required
									/>
								</div>
							</div>
							<div>
								<button
									type="submit"
									className="btn cursor-pointer text-gray-800 bg-gray-100 hover:bg-white w-full"
								>
									Join The Waitlist
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}
