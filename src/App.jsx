import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Publication from "./pages/publication/Publication";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import { AnimatePresence } from "framer-motion";
import Frontend from "./layouts/Frontend";
import { ParallaxProvider } from "react-scroll-parallax";
import Publication2 from "./pages/publication/Publication2";
import FlipBook from "./components/publication/FlipBook";
import NotFound from "./components/404page";
import ScrollToTop from "./components/ScrollToTop";
import Test from "./pages/publication/Test";

const App = () => {
	const location = useLocation();
	return (
		<div>
			<ParallaxProvider>
				<AnimatePresence exitBeforeEnter>
					<ScrollToTop />
					<Routes key={location.pathname} location={location}>
						<Route path="/" element={<Frontend />}>
							<Route path="/" element={<Home />} />
							<Route path="/publication2" element={<Publication />} />
							<Route path="/contact" element={<Contact />} />
							<Route path="/about" element={<About />} />
							<Route path="/publication" element={<Publication2 />} />
							{/* <Route path="/login" element={<Login />} /> */}
							<Route path="/publication/:id" element={<FlipBook />} />
						</Route>
						<Route path="/launch" element={<Test />} />
						<Route path="*" element={<NotFound />} />

						{/* <Route path="/dashboard" element={<Backend />}>
              <Route
                path="/dashboard/view-publication"
                element={<PublicationIndex />}
              />
              <Route
                path="/dashboard/add-publication"
                element={<CreatePublication />}
              />
              <Route
                path="/dashboard/edit-publication/:id"
                element={<EditPublication />}
              />
            </Route> */}
					</Routes>
				</AnimatePresence>
			</ParallaxProvider>
		</div>
	);
};

export default App;
