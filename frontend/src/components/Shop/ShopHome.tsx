import {
  Button,
  Container,
  Image,
  LI,
  Paragraph,
  UnorderedList,
} from '../CreateShop/styles/Index';
import PlusSVG from '../../images/plus.svg';
import BlenderSVG from '../../images/blender.svg';
import { SecondDesktopContainer } from '../CreateShop/styles/StepTwo';
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  updateShop,
  getShopById,
} from '../../axiosFolder/functions/shopFunction';
import { showErrorToast, showSuccessToast } from '../utils/toastify';
import { getUserProducts } from '../../axiosFolder/functions/productFunction';

const ShopHome = () => {
  const shopPhotoInputRef = useRef<HTMLInputElement>(null);
  const [retrievedShop, setRetrievedShop] = useState<Record<
    string,
    string
  > | null>(null);
  const [userProducts, setUserProducts] = useState<Record<string, any>[]>([]);
  const navigate = useNavigate();
  const createdShop = JSON.parse(localStorage.getItem('createdShop')!);
  const createdProduct = JSON.parse(localStorage.getItem('createdProduct')!);
  const { id } = useParams(); // priceRange from URL

  useEffect(() => {
    const fetchShop = async () => {
      const response = await getShopById(id!);
      setRetrievedShop(response.data.shop);
      localStorage.setItem('createdShop', JSON.stringify(response.data.shop));

      const userProductsResponse = await getUserProducts(id!);
      setUserProducts(userProductsResponse?.data);
      console.log(userProductsResponse?.data);
      localStorage.setItem(
        'userProducts',
        JSON.stringify(userProductsResponse!.data)
      );
    };
    fetchShop();
  }, []);

  const handleShopPhotoChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files[0]) {
      // Send request to update shop image
      const updateShopResponse = await updateShop(createdShop.id, {
        image: event.target.files[0],
      })!;
      if (updateShopResponse.status !== 200) {
        return showErrorToast(updateShopResponse.data.message);
      }
      setRetrievedShop(updateShopResponse.data.shop);
      localStorage.setItem(
        'createdShop',
        JSON.stringify(updateShopResponse.data.shop)
      );
      showSuccessToast(updateShopResponse.data.message);
    }
  };

  const triggerShopPhotoUpload = () => {
    shopPhotoInputRef.current?.click();
  };

  return (
    <>
      <Container
        $width="100%"
        $margin="1.5rem 0 0 0"
        $display="flex"
        $flexDirection="column"
        $rowGap="2rem"
        $padding="1rem"
        className="shop-home-container"
      >
        {/* Top container */}
        <Container
          $display="flex"
          $flexDirection="column"
          $alignItems="center"
          $rowGap="1rem"
          $width="100%"
          className="top-button-and-text-container"
        >
          <Container
            $border="1px solid black"
            $borderRadius="5px"
            $display="flex"
            $flexDirection="column"
            $alignItems="center"
            className="top-container-image-box"
            $width="70%"
            $padding="1rem"
            $maxWidth="275px"
            onClick={triggerShopPhotoUpload}
            style={{ cursor: 'pointer' }}
          >
            <input
              type="file"
              accept="image/*"
              onChange={handleShopPhotoChange}
              ref={shopPhotoInputRef}
              style={{ display: 'none' }}
            />
            {retrievedShop && retrievedShop!.imageUrls.length > 0 ? (
              <Image
                src={retrievedShop!.imageUrls[0]}
                alt="Shop photo"
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
              />
            ) : (
              <>
                <Image src={PlusSVG} alt="plus" />
                <Paragraph>Add Shop image/logo</Paragraph>
              </>
            )}
          </Container>
          <Container>
            <Paragraph>
              {' '}
              {createdShop ? createdShop.name : 'Empress Ki Stores'}{' '}
            </Paragraph>
          </Container>
        </Container>

        {/* Bottom container */}
        <SecondDesktopContainer
          $display="flex"
          $flexDirection="column"
          $rowGap="1rem"
          $width="100%"
          $columnGap="1.5rem"
          className="bottom-container"
        >
          <Container
            $display="flex"
            $flexDirection="column"
            $rowGap="0.5rem"
            $width="100%"
            $maxWidth="615px"
          >
            <Paragraph $fontSize="1.5rem" $fontWeight="500">
              Upload Images
            </Paragraph>

            <Paragraph
              $fontSize="1.3rem"
              $fontWeight="500"
              $margin="0.6rem 0 0 2px"
            >
              Photos
            </Paragraph>
            <Paragraph
              $fontSize="1rem"
              $color="rgba(0, 0, 0, 0.5)"
              $fontFamily="'Inter', sans-serif"
            >
              Add some aesthetic photos for your item
            </Paragraph>
            <Paragraph
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
            $rowGap="0.5rem"
            $width="100%"
            $maxWidth="615px"
            $padding="0 0.4rem"
          >
            {/* <Container
              $display="flex"
              $flexDirection="column"
              className="blender-container"
            >
              <Container>
                <Paragraph
                  $fontSize="1rem"
                  $fontFamily="Inter"
                  $border="1px solid #F2F2F2"
                  $maxWidth="220px"
                >
                  {userProducts.length > 0 ? (
                    userProducts.map((product) => {
                      <div key={product.id}>
                        <Image
                          src={product.imageUrl[0]}
                          alt="blender"
                          width="220px"
                          $border="1px solid #F2F2F2"
                        ></Image>
                        {product.name}
                        <br />N {product.price}
                      </div>;
                    })
                  ) : (
                    <>No Products in this shop</>
                  )}
                </Paragraph>
              </Container>
            </Container> */}
          </Container>
          <Button
            $padding="0.65rem 2.2rem"
            $border="1px solid #E04F16"
            $borderRadius="5px"
            $fontWeight="500"
            $fontSize="1rem"
            $backgroundColor="#E04F16"
            $color="white"
            className="form-button-left"
            type="button"
            onClick={() => {
              navigate(`/MyProductList/${createdShop.id}`);
            }}
          >
            Go to products
          </Button>
        </SecondDesktopContainer>
      </Container>
    </>
  );
};

export default ShopHome;
