/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	useBlockProps,
	InspectorControls,
	MediaUpload,
} from "@wordpress/block-editor";
import {
	PanelBody,
	PanelRow,
	TextControl,
	TextareaControl,
	Button
} from "@wordpress/components";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";
import defaultImage from "./../../image.png";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const { heading, overlayImage, singlebenifit, buttonText, buttonLink } =
		attributes;

	// Handle Functions
	const handleHeading = (text) => {
		setAttributes({ heading: text });
	};
	const handleImage = (img) => {
		setAttributes({ overlayImage: img.url });
	};
	const handleButtonText = (text) => {
		setAttributes({ buttonText: text });
	};
	const handleButtonLink = (link) => {
		setAttributes({ buttonLink: link });
	};

	// Functions for singleBenefit
	const addItem = () => {
		const newItems = [...singlebenifit];
		newItems.push({ icon: "", title: "", description: "" });
		setAttributes({singlebenifit: newItems});
	}

	const updateItem = (index, key, value) => {
		const newItems = [...singlebenifit];
		newItems[index][key] = value;
		setAttributes({singlebenifit: newItems});
	};

	const removeItem = (index) => {
		const newItems = [...singlebenifit];
		newItems.splice(index, 1);
		setAttributes({singlebenifit: newItems});
	};

		return (
			<>
				{/* Collect Data From User */}
				<InspectorControls>
					<PanelBody title={__("Additional Settings")} initialOpen={true}>
						{/* Heading */}
						<PanelRow>
							<fieldset>
								<TextControl
									value={heading}
									onChange={handleHeading}
									label={__("Heading")}
								/>
							</fieldset>
						</PanelRow>

						{/* Overlay Image */}
						<PanelRow>
							<fieldset>
								<MediaUpload
									label={__("Overlay Image")}
									type="image"
									value={overlayImage}
									onSelect={handleImage}
									render={({ open }) => (
										<div>
											<img
												src={overlayImage ? overlayImage : defaultImage}
												onClick={open}
												alt={__("Click to Open")}
												style={{ cursor: "pointer" }}
											/>
											{overlayImage && (
												<p>
													{__("Selected Image URL")}: {overlayImage}
												</p>
											)}
										</div>
									)}
								/>
							</fieldset>
						</PanelRow>

						{/* Single Benefit */}
						{singlebenifit.map((item, index) => (
							<>
							<div key={index}>
								<PanelRow>
									<TextControl
										label="Title"
										value={item.title}
										onChange={(value) => updateItem(index, "title", value)}
									/>
								</PanelRow>
								<PanelRow>
									<TextareaControl
										label="Description"
										value={item.description}
										onChange={(value) =>
											updateItem(index, "description", value)
										}
									/>
								</PanelRow>
								<PanelRow>
									<fieldset>
										<MediaUpload
											label={__("icon")}
											type="image"
											value={item.icon}
											onSelect={(img) => updateItem(index, "icon", img.url)}
											render={({ open }) => (
												<div>
													<img
														src={item?.icon ? item?.icon : defaultImage}
														onClick={open}
														alt={__("Click to Open")}
														style={{ cursor: "pointer" }}
													/>
													{item?.icon && (
														<p>
															{__("Selected Image URL")}: {item?.icon}
														</p>
													)}
												</div>
											)}
										/>
									</fieldset>
								</PanelRow>
								<PanelRow>
									<Button isDestructive onClick={() => removeItem(index)}>
										Remove Item
									</Button>
								</PanelRow>
							</div>
							</>
						))}

						<PanelRow>
							<Button isPrimary onClick={addItem}>
								Add Item
							</Button>
						</PanelRow>

						{/* Button Text and Link */}
						<PanelRow>
							<fieldset>
								<TextControl
									value={buttonText}
									onChange={handleButtonText}
									label={__("Button Text")}
								/>
							</fieldset>
						</PanelRow>
						<PanelRow>
							<fieldset>
								<TextControl
									value={buttonLink}
									onChange={handleButtonLink}
									label={__("Button Link")}
								/>
							</fieldset>
						</PanelRow>
					</PanelBody>
				</InspectorControls>				

				{/* Output in Editor */}
				<div {...useBlockProps()}>
					<section className="cr-benefits pos-relative">
						<div className="cr-container">
							<div className="cr-row">
								<div className="cr-col">
									<h2 className="section-title circular-700 color-232 crx">
										{heading}
									</h2>
								</div>
							</div>
						</div>

						<div className="cr-benefit-content-area pos-relative">
							<div className="overlay">
								{overlayImage && (
									<img
										layout="raw"
										width="10000"
										height="10000"
										src={overlayImage}
										alt="benefits image"
									/>
								)}
							</div>

							<div className="cr-container">
								<div className="cr-row">
									<div className="cr-col">
										<div className="benefits-content">
											{singlebenifit.map((item, index) => {
												let icon = item.icon;
												return (
													<div className="single-benefits" key={index}>
														{item.icon && (
															<img
																layout="raw"
																width="40"
																height="40"
																src={icon}
																alt="icon"
															/>
														)}
														<div className="benefit-title">
															<h5>{item.title}</h5>
															<p>{item.description}</p>
														</div>
													</div>
												);
											})}
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="button-area">
							{buttonText && (
								<a
									className="cr-btn-default discuss-btn svg-btn-effect"
									href={buttonLink ? buttonLink : "#"}
									style={{ textDecoration: "none" }}
								>
									<svg>
										<rect
											x="2"
											y="2"
											rx="30"
											fill="none"
											width="98%"
											height="56"
										></rect>
									</svg>
									<span>{buttonText}</span>
								</a>
							)}
						</div>
					</section>
				</div>
			</>
		)

}