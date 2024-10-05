/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Container,
  Paragraph,
  Label,
  UnorderedList,
  Input,
  LI,
  Image,
  TextArea,
  Select,
  Option,
} from './styles/Index';
import {
  StepTwoDesktopContainer,
  SecondDesktopContainer,
} from './styles/StepTwo';
import CameraSVG from '../../images/camera.svg';
// import VideoCameraSVG from '../../images/videocam.svg';
import React, { useState, useRef } from 'react';
import { FormDataType, handleShopInputChangeType } from './MultiStepForm';

type StepTwoProps = {
  productFormData: FormDataType;
  handleProductInputChange: handleShopInputChangeType;
  shopFormData: FormDataType;
  handleShopInputChange: handleShopInputChangeType;
  setProductFormData: any;
};

const StepTwo: React.FC<StepTwoProps> = ({
  productFormData,
  handleProductInputChange,
  shopFormData,
  handleShopInputChange,
  setProductFormData,
}) => {
  const [selectedPhoto, setSelectedPhoto] = useState<File | null>(null);
  // const [selectedVideo, setSelectedVideo] = useState<File | null>(null);
  const photoInputRef = useRef<HTMLInputElement>(null);
  const videoInputRef = useRef<HTMLInputElement>(null);

  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedPhoto(event.target.files[0]);

      // Add the uploaded image to the form data -- If Friday can help to fix
      setProductFormData({
        ...productFormData,
        image: event.target.files[0],
      });
    }
  };

  // const handleVideoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   if (event.target.files && event.target.files[0]) {
  //     setSelectedVideo(event.target.files[0]);

  //     // Add the uploaded image to the form data -- Friday can help to fix
  //     // setProductFormData({
  //     //   ...productFormData,
  //     //   video: event.target.files[0],
  //     // });
  //   }
  // };

  const triggerPhotoUpload = () => {
    photoInputRef.current?.click();
  };

  const triggerVideoUpload = () => {
    videoInputRef.current?.click();
  };

  return (
    <>
      <Container className="step-two">
        <Container $maxWidth="930px" $margin="0 auto" $padding="0.4rem">
          <Paragraph $fontSize="1.5rem" $fontWeight="500">
            Creating a Product
          </Paragraph>
          <Paragraph
            $margin="1rem 0 0 0"
            $fontSize="1.25rem"
            $color="rgba(0, 0, 0, 0.5)"
            $fontFamily="'Inter', sans-serif"
          >
            Add some photos and details about your item. Fill out what you can
            for now—you'll be able to edit this later.
          </Paragraph>
        </Container>

        <Container
          $margin="1rem 0 0 0"
          $display="flex"
          $flexDirection="column"
          $rowGap="1.5rem"
          className="step-two-inputs-container"
        >
          <StepTwoDesktopContainer
            $display="flex"
            $flexDirection="column"
            $alignItems="center"
            $rowGap="1rem"
            $width="100%"
            $columnGap="1.5rem"
            className="step-two-photos-container"
          >
            <Container
              $display="flex"
              $flexDirection="column"
              $rowGap="0.5rem"
              $width="100%"
              $maxWidth="300px"
            >
              <Paragraph
                $fontSize="1.5rem"
                $fontWeight="500"
                $margin="0 0 0 4px"
              >
                Photos
              </Paragraph>

              <Paragraph
                $margin="0 0 0 4px"
                $fontSize="1rem"
                $color="rgba(0, 0, 0, 0.5)"
                $fontFamily="'Inter', sans-serif"
              >
                Add some aesthetic photos for your shop
              </Paragraph>
              <Paragraph
                $margin="0 0 0 4px"
                $fontSize="1rem"
                $color="rgba(0, 0, 0, 0.5)"
                $fontFamily="'Inter', sans-serif"
              >
                Tips:
              </Paragraph>
              <UnorderedList>
                <LI>Use natural light and no flash.</LI>
                <LI>Include a common object for scale.</LI>
                <LI>Show the item being held, worn, or used.</LI>
                <LI>Shoot against a clean, simple background.</LI>
                <LI>
                  Add photos to your variations so buyers can see all their
                  options.
                </LI>
              </UnorderedList>
            </Container>

            <Container
              $display="flex"
              $flexDirection="column"
              $alignItems="center"
              $rowGap="0.5rem"
              $width="62%"
              $border="1px solid rgba(0, 0, 0, 0.5)"
              $borderRadius="8px"
              $padding="10px 0"
              $maxWidth="300px"
              onClick={triggerPhotoUpload}
              style={{ cursor: 'pointer' }}
            >
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                ref={photoInputRef}
                style={{ display: 'none' }}
              />
              {selectedPhoto ? (
                <Image
                  src={URL.createObjectURL(selectedPhoto)}
                  alt="Selected photo"
                  width="217px"
                  height="217px"
                  style={{ objectFit: 'cover' }}
                />
              ) : (
                <Image
                  src={CameraSVG}
                  alt="camera icon"
                  width="117px"
                  height="117px"
                />
              )}

              <Paragraph
                $fontSize="0.9rem"
                $fontWeight="500"
                $margin="0 0 0 4px"
              >
                {selectedPhoto ? 'Change Photo' : 'Add a Photo'}
              </Paragraph>
            </Container>
          </StepTwoDesktopContainer>

          {/* Videos section */}
          {/* <StepTwoDesktopContainer
            $display="flex"
            $flexDirection="column"
            $alignItems="center"
            $rowGap="1rem"
            $width="100%"
            $columnGap="1.5rem"
            className="step-two-videos-container"
          >
            <Container
              $display="flex"
              $flexDirection="column"
              $rowGap="0.5rem"
              $width="100%"
              $maxWidth="300px"
            >
              <Paragraph
                $fontSize="1.5rem"
                $fontWeight="500"
                $margin="0 0 0 4px"
              >
                Videos
              </Paragraph>

              <Paragraph
                $margin="0 0 0 4px"
                $fontSize="1rem"
                $color="rgba(0, 0, 0, 0.5)"
                $fontFamily="'Inter', sans-serif"
              >
                Add some Aesthetic Videos for your Shop
              </Paragraph>
              <Paragraph
                $margin="0 0 0 4px"
                $fontSize="1rem"
                $color="rgba(0, 0, 0, 0.5)"
                $fontFamily="'Inter', sans-serif"
              >
                Quick tips:
              </Paragraph>
              <UnorderedList>
                <LI>
                  Film wearable items on a model or show a functional item being
                  used.
                </LI>
                <LI>
                  Adjust your settings to record high resolution video—aim for
                  1080p or higher.
                </LI>
                <LI>
                  Crop your video after you upload it to get the right
                  dimensions.
                </LI>
              </UnorderedList>
            </Container>

            <Container
              $display="flex"
              $flexDirection="column"
              $alignItems="center"
              $rowGap="0.5rem"
              $width="62%"
              $border="1px solid rgba(0, 0, 0, 0.5)"
              $borderRadius="8px"
              $padding="10px 0"
              $maxWidth="300px"
              onClick={triggerVideoUpload}
              style={{ cursor: 'pointer' }}
            >
              <input
                type="file"
                accept="video/*"
                onChange={handleVideoChange}
                ref={videoInputRef}
                style={{ display: 'none' }}
              />
              {selectedVideo ? (
                <video width="217" height="217" controls>
                  <source
                    src={URL.createObjectURL(selectedVideo)}
                    type={selectedVideo.type}
                  />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <Image
                  src={VideoCameraSVG}
                  alt="camera icon"
                  width="117px"
                  height="117px"
                />
              )}
              <Paragraph
                $fontSize="0.9rem"
                $fontWeight="500"
                $margin="0 0 0 4px"
              >
                {selectedVideo ? 'Change Video' : 'Add a Video'}
              </Paragraph>
            </Container>
          </StepTwoDesktopContainer> */}

          {/* Listing details */}
          <SecondDesktopContainer
            $display="flex"
            $flexDirection="column"
            $rowGap="1rem"
            $width="100%"
            $columnGap="1.5rem"
            className="listing-details-container"
          >
            {/* Title */}
            <Container
              $display="flex"
              $flexDirection="column"
              $rowGap="0.5rem"
              $width="100%"
              $maxWidth="615px"
            >
              <Paragraph $fontSize="1.5rem" $fontWeight="500">
                Listing details
              </Paragraph>
              <Paragraph
                $margin="1rem 0 0 0"
                $fontSize="1.25rem"
                $color="rgba(0, 0, 0, 0.5)"
                $fontFamily="'Inter', sans-serif"
              >
                Tell the world all about your item and why they'll love it
              </Paragraph>

              <Label htmlFor="product-name" $margin="4px 0 0 4px">
                Product Name*
                <Paragraph
                  $margin="0.8rem 0 0 0"
                  $fontSize="1rem"
                  $color="rgba(0, 0, 0, 0.5)"
                  $fontFamily="'Inter', sans-serif"
                >
                  Include keywords that buyers would use to search for your
                  item.
                </Paragraph>
              </Label>
              <Input
                type="text"
                name="name"
                id="product-name"
                required
                value={productFormData.name}
                onChange={handleProductInputChange}
                $border="1px solid #D0D5DD"
                $borderRadius="8px"
                $padding="12px 16px"
              ></Input>
            </Container>

            {/* Price */}
            <Container
              $display="flex"
              $flexDirection="column"
              $rowGap="0.5rem"
              $width="100%"
              $maxWidth="615px"
            >
              <Label htmlFor="product-price" $margin="0 0 0 4px">
                Price*
              </Label>
              <Paragraph
                $margin="0.8rem 0 0 0"
                $fontSize="1rem"
                $color="rgba(0, 0, 0, 0.5)"
                $fontFamily="'Inter', sans-serif"
              >
                Type a two- or three-word description of your item to get
                category suggestions that will help more shoppers find it.
              </Paragraph>

              <Input
                type="number"
                name="price"
                id="product-price"
                required
                value={productFormData.price}
                onChange={handleProductInputChange}
                $border="1px solid #D0D5DD"
                $borderRadius="8px"
                $padding="12px 16px"
              ></Input>
            </Container>

            {/* Product Category */}
            <Container
              $display="flex"
              $flexDirection="column"
              $rowGap="0.5rem"
              $width="100%"
              $maxWidth="615px"
            >
              <Label htmlFor="product-category" $margin="0 0 0 4px">
                Product Category*
              </Label>
              <Paragraph
                $margin="0.8rem 0 0 0"
                $fontSize="1rem"
                $color="rgba(0, 0, 0, 0.5)"
                $fontFamily="'Inter', sans-serif"
              >
                What is your product's category?
              </Paragraph>
              <Select
                name="category"
                id="product-category"
                required
                value={productFormData.category}
                onChange={handleProductInputChange}
                $border="1px solid #D0D5DD"
                $borderRadius="8px"
                $padding="12px 16px"
                $fontFamily="inherit"
              >
                <Option value="">Select</Option>
                <Option value="ELECTRONICS">Electronics</Option>
                <Option value="FASHION">Fashion</Option>
                <Option value="FOOD">Food</Option>
                <Option value="HEALTH">Health</Option>
                <Option value="HOME">Home</Option>
                <Option value="SPORTS">Sports</Option>
                <Option value="CHILDREN">Children</Option>
                <Option value="ADULT">Adult</Option>
                <Option value="OTHERS">Others</Option>
              </Select>
            </Container>

            {/* Product Color */}
            <Container
              $display="flex"
              $flexDirection="column"
              $rowGap="0.5rem"
              $width="100%"
              $maxWidth="615px"
            >
              <Label htmlFor="product-color" $margin="0 0 0 4px">
                Product Color*
              </Label>
              <Paragraph
                $margin="0.8rem 0 0 0"
                $fontSize="1rem"
                $color="rgba(0, 0, 0, 0.5)"
                $fontFamily="'Inter', sans-serif"
              >
                What is the color of the product?
              </Paragraph>
              <Select
                name="color"
                id="product-color"
                required
                value={productFormData.color}
                onChange={handleProductInputChange}
                $border="1px solid #D0D5DD"
                $borderRadius="8px"
                $padding="12px 16px"
                $fontFamily="inherit"
              >
                <Option value="">Select</Option>
                <Option value="GREEN">Green</Option>
                <Option value="BLUE">Blue</Option>
                <Option value="RED">Red</Option>
                <Option value="ORANGE">Orange</Option>
                <Option value="YELLOW">Yellow</Option>
              </Select>
            </Container>

            {/* Description */}
            <Container
              $display="flex"
              $flexDirection="column"
              $rowGap="0.5rem"
              $width="100%"
              $maxWidth="615px"
            >
              <Label htmlFor="product-description" $margin="0 0 0 4px">
                Description*
              </Label>
              <Paragraph
                $margin="0.8rem 0 0 0"
                $fontSize="1rem"
                $color="rgba(0, 0, 0, 0.5)"
                $fontFamily="'Inter', sans-serif"
              >
                Start with a brief overview that describes your item's finest
                features. Shoppers will only see the first few lines of your
                description at first, so make it count!
              </Paragraph>
              <Paragraph
                $margin="0.8rem 0 0 0"
                $fontSize="1rem"
                $color="rgba(0, 0, 0, 0.5)"
                $fontFamily="'Inter', sans-serif"
              >
                Not sure what else to say? Shoppers also like hearing about your
                process, and the story behind this item.
              </Paragraph>

              <TextArea
                type="textbox"
                name="description"
                id="product-description"
                required
                value={productFormData.description}
                onChange={handleProductInputChange}
                $border="1px solid #D0D5DD"
                $borderRadius="8px"
                $padding="12px 16px"
              ></TextArea>
            </Container>
          </SecondDesktopContainer>

          {/* Shipping details */}
          <SecondDesktopContainer
            $display="flex"
            $flexDirection="column"
            $rowGap="1rem"
            $width="100%"
            $columnGap="1.5rem"
            className="shipping-details-container"
          >
            {/* Shipping address */}
            <Container
              $display="flex"
              $flexDirection="column"
              $rowGap="0.5rem"
              $width="100%"
              $maxWidth="615px"
            >
              <Paragraph $fontSize="1.5rem" $fontWeight="500">
                Shipping
              </Paragraph>
              <Paragraph
                $margin="1rem 0 0 0"
                $fontSize="1rem"
                $color="rgba(0, 0, 0, 0.5)"
                $fontFamily="'Inter', sans-serif"
              >
                Give shoppers clear expectations about delivery time and cost by
                making sure your shipping info is accurate, including the
                shipping profile and your order processing schedule. You can
                make updates any time in Shipping settings.
              </Paragraph>

              <Label htmlFor="shippping-address" $margin="4px 0 0 4px">
                Shipping Address
              </Label>
              <Input
                type="text"
                name="shippingAddress"
                id="shipping-address"
                value={shopFormData.shippingAddress}
                onChange={handleShopInputChange}
                required
                $border="1px solid #D0D5DD"
                $borderRadius="8px"
                $padding="12px 16px"
              ></Input>
            </Container>

            {/* Shipping Prices */}
            <Container
              $display="flex"
              $flexDirection="column"
              $rowGap="0.5rem"
              $width="100%"
              $maxWidth="615px"
            >
              <Label htmlFor="shipping-prices" $margin="0 0 0 4px">
                Shipping Prices
              </Label>
              <Input
                type="text"
                name="shippingPrices"
                id="shipping-prices"
                placeholder="NGN"
                required
                value={shopFormData.shippingPrices}
                onChange={handleShopInputChange}
                $border="1px solid #D0D5DD"
                $borderRadius="8px"
                $padding="12px 16px"
              ></Input>
            </Container>

            {/* Shipping Services */}
            <Container
              $display="flex"
              $flexDirection="column"
              $rowGap="0.5rem"
              $width="100%"
              $maxWidth="615px"
            >
              <Label htmlFor="shipping-services" $margin="0 0 0 4px">
                Shipping services
              </Label>
              <Input
                type="text"
                name="shippingServices"
                id="shipping-services"
                required
                value={shopFormData.shippingServices}
                onChange={handleShopInputChange}
                $border="1px solid #D0D5DD"
                $borderRadius="8px"
                $padding="12px 16px"
              ></Input>
            </Container>
          </SecondDesktopContainer>
        </Container>
      </Container>
    </>
  );
};

export default StepTwo;
