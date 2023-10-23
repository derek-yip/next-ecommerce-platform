import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import Gallery from "@/components/gallery";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

interface ProductPageProps {
  params: {
    productId: string;
  };
}

async function ProductPage({ params }: ProductPageProps) {
  const product = (await getProduct()).filter(
    (item) => item.id === params.productId
  )[0];

  const suggestProducts = await getProducts({
    categoryId: product?.category?.id,
  });

  console.log();
  

  return (
    <div>
      <div className="bg-white">
        <Container>
          <div className="px-4 py-10 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
              {/* Gallery */}
              <Gallery images={product.images}/>
              <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt:0">
                {/* Info */}
                Info
              </div>
            </div>
            <hr className="my-10" />
            <ProductList title="Related Items" items={suggestProducts} />
          </div>
        </Container>
      </div>
    </div>
  );
}

export default ProductPage;
