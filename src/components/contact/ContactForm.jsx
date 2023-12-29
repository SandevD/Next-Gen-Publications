/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { MailIcon, PhoneIcon } from "@heroicons/react/outline";
import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import ReCAPTCHA from "react-google-recaptcha";
import instagram from "../../assets/svg/instagram.svg";

import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

export default function ContactForm() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");

	const handleClick = async (e) => {
		e.preventDefault();

		const formData = new FormData();
		formData.append("first_name", firstName);
		formData.append("last_name", lastName);
		formData.append("email", email);
		formData.append("phone", phone);
		formData.append("subject", subject);
		formData.append("message", message);

		await axios.post(window.host + `/api/contact`, formData).then((data) => {
			Swal.fire({
				icon: "success",
				title: "Awsome!",
				text: "Your message has benn sent. Thank you!",
			});
		});
		setFirstName("");
		setLastName("");
		setEmail("");
		setPhone("");
		setSubject("");
		setMessage("");
	};

	const [info, setInfo] = useState([]);

	useEffect(() => {
		fetchInfo();
	}, []);

	const fetchInfo = async () => {
		const res = await axios.get(window.host + `/api/general-info`);
		setInfo(res.data);
	};

	return (
		<div className="">
			<div className="max-w-7xl mx-auto pb-16 px-4 sm:px-6 lg:px-8">
				<div className="relative bg-white shadow-2xl">
					<h2 className="sr-only">Contact us</h2>

					<div className="grid grid-cols-1 lg:grid-cols-3">
						{/* Contact information */}
						<div className="relative overflow-hidden py-10 px-6 bg-indigo-700 sm:px-10 xl:p-12">
							<div
								className="absolute inset-0 pointer-events-none sm:hidden"
								aria-hidden="true"
							>
								<svg
									className="absolute inset-0 w-full h-full"
									width={343}
									height={388}
									viewBox="0 0 343 388"
									fill="none"
									preserveAspectRatio="xMidYMid slice"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
										fill="url(#linear1)"
										fillOpacity=".1"
									/>
									<defs>
										<linearGradient
											id="linear1"
											x1="254.553"
											y1="107.554"
											x2="961.66"
											y2="814.66"
											gradientUnits="userSpaceOnUse"
										>
											<stop stopColor="#fff" />
											<stop offset={1} stopColor="#fff" stopOpacity={0} />
										</linearGradient>
									</defs>
								</svg>
							</div>
							<div
								className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden"
								aria-hidden="true"
							>
								<svg
									className="absolute inset-0 w-full h-full"
									width={359}
									height={339}
									viewBox="0 0 359 339"
									fill="none"
									preserveAspectRatio="xMidYMid slice"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
										fill="url(#linear2)"
										fillOpacity=".1"
									/>
									<defs>
										<linearGradient
											id="linear2"
											x1="192.553"
											y1="28.553"
											x2="899.66"
											y2="735.66"
											gradientUnits="userSpaceOnUse"
										>
											<stop stopColor="#fff" />
											<stop offset={1} stopColor="#fff" stopOpacity={0} />
										</linearGradient>
									</defs>
								</svg>
							</div>
							<div
								className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block"
								aria-hidden="true"
							>
								<svg
									className="absolute inset-0 w-full h-full"
									width={160}
									height={678}
									viewBox="0 0 160 678"
									fill="none"
									preserveAspectRatio="xMidYMid slice"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
										fill="url(#linear3)"
										fillOpacity=".1"
									/>
									<defs>
										<linearGradient
											id="linear3"
											x1="192.553"
											y1="325.553"
											x2="899.66"
											y2="1032.66"
											gradientUnits="userSpaceOnUse"
										>
											<stop stopColor="#fff" />
											<stop offset={1} stopColor="#fff" stopOpacity={0} />
										</linearGradient>
									</defs>
								</svg>
							</div>
							<h3 className="text-lg font-medium text-white">
								Contact information
							</h3>
							<p className="mt-6 text-base text-indigo-50 max-w-3xl">
								{info.contact_addres}
							</p>
							<dl className="mt-8 space-y-6">
								<dt>
									<span className="sr-only">Phone number</span>
								</dt>
								<dd className="flex text-base text-indigo-50">
									<PhoneIcon
										className="flex-shrink-0 w-6 h-6 text-indigo-200"
										aria-hidden="true"
									/>
									<span className="ml-3">{info.contact_phone}</span>
								</dd>
								<dt>
									<span className="sr-only">Email</span>
								</dt>
								<dd className="flex text-base text-indigo-50">
									<MailIcon
										className="flex-shrink-0 w-6 h-6 text-indigo-200"
										aria-hidden="true"
									/>
									<span className="ml-3">{info.contact_email}</span>
								</dd>
							</dl>
							<ul role="list" className="mt-12 flex space-x-12">
								<li>
									<a
										className="text-indigo-200 hover:text-indigo-100"
										href={info.contact_facebook}
										target="_blank"
									>
										<span className="sr-only">Facebook</span>
										<BsFacebook className="text-2xl" />
									</a>
								</li>
								<li>
									<a
										className="text-indigo-200 hover:text-indigo-100"
										target="_blank"
										href={info.contact_insta}
									>
										<span className="sr-only">Instagram</span>
										<BsInstagram className="text-2xl" />
									</a>
								</li>
								<li>
									<a
										className="text-indigo-200 hover:text-indigo-100"
										target="_blank"
										href={info.contact_youtube}
									>
										<span className="sr-only">Youtube</span>
										<BsYoutube className="text-2xl" />
									</a>
								</li>
							</ul>
						</div>

						{/* Contact form */}
						<div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
							<h3 className="text-lg font-medium text-gray-900">
								Send us a message
							</h3>
							<form
								onSubmit={handleClick}
								className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
							>
								<div>
									<label
										htmlFor="first-name"
										className="block text-sm font-medium text-gray-900"
									>
										First name
									</label>
									<div className="mt-1">
										<input
											onChange={(e) => setFirstName(e.target.value)}
											value={firstName}
											type="text"
											name="first-name"
											id="first-name"
											autoComplete="given-name"
											className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
											required
										/>
									</div>
								</div>
								<div>
									<label
										htmlFor="last-name"
										className="block text-sm font-medium text-gray-900"
									>
										Last name
									</label>
									<div className="mt-1">
										<input
											onChange={(e) => setLastName(e.target.value)}
											value={lastName}
											type="text"
											name="last-name"
											id="last-name"
											autoComplete="family-name"
											required
											className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
										/>
									</div>
								</div>
								<div>
									<label
										htmlFor="email"
										className="block text-sm font-medium text-gray-900"
									>
										Email
									</label>
									<div className="mt-1">
										<input
											onChange={(e) => setEmail(e.target.value)}
											value={email}
											id="email"
											name="email"
											type="email"
											autoComplete="email"
											required
											className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
										/>
									</div>
								</div>
								<div>
									<div className="flex justify-between">
										<label
											htmlFor="phone"
											className="block text-sm font-medium text-gray-900"
										>
											Phone
										</label>
										<span id="phone-optional" className="text-sm text-gray-500">
											Optional
										</span>
									</div>
									<div className="mt-1">
										<input
											onChange={(e) => {
												setPhone(e.target.value);
											}}
											value={phone}
											type="text"
											name="phone"
											id="phone"
											autoComplete="tel"
											required
											className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
											aria-describedby="phone-optional"
										/>
									</div>
								</div>
								<div className="sm:col-span-2">
									<label
										htmlFor="subject"
										className="block text-sm font-medium text-gray-900"
									>
										Subject
									</label>
									<div className="mt-1">
										<input
											onChange={(e) => {
												setSubject(e.target.value);
											}}
											type="text"
											name="subject"
											value={subject}
											id="subject"
											required
											className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
										/>
									</div>
								</div>
								<div className="sm:col-span-2">
									<div className="flex justify-between">
										<label
											htmlFor="message"
											className="block text-sm font-medium text-gray-900"
										>
											Message
										</label>
										<span id="message-max" className="text-sm text-gray-500">
											Max. 500 characters
										</span>
									</div>
									<div className="mt-1">
										<textarea
											id="message"
											name="message"
											rows={4}
											value={message}
											required
											className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
											aria-describedby="message-max"
											onChange={(e) => {
												setMessage(e.target.value);
											}}
											// defaultValue={""}
										/>
									</div>
								</div>
								<ReCAPTCHA sitekey="6LcTFtklAAAAAEIzZrQjonWahBWL6zgYGmnR-INv" size="invisible"/>
								<div className="sm:col-span-2 sm:flex sm:justify-end">
									<button
										type="submit"
										className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto"
									>
										Submit
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
