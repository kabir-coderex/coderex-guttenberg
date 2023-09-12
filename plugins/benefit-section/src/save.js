/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from "@wordpress/block-editor";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({ attributes }) {
	const { heading, overlayImage, singlebenifit, buttonText, buttonLink } =
		attributes;

	return (
		<>
			<div {...useBlockProps.save()}>
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
	);
}
