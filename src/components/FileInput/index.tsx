import React, { useRef } from "react";

interface FileInputProps {
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FileInput: React.FC<FileInputProps> = ({
	onChange,
}: FileInputProps): React.ReactElement => {
	const fileInputRef = useRef<HTMLInputElement | null>(null);
	return (
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
					onClick={() => {
						fileInputRef.current.click();
					}}
					className="py-2 px-3 border border-gray-300 rounded-md text-sm leading-4 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"
				>
					Change
				</button>
				<input
					onChange={onChange}
					className="hidden"
					type="file"
					ref={fileInputRef}
				/>
			</span>
		</div>
	);
};

export default FileInput;
