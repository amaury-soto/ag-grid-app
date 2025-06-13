import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { addToCart, removeFromCart, updateQuantity, clearCart } from '../../store/slices/cartSlice';
import { getProducts, IProduct } from '../../services/api/productService';
import { PageContainer, PageTitle, PageContent } from '../styles/common.styles';
import {
  ProductGrid,
  ProductCard,
  CartSection,
  CartItem,
  Button,
  Price,
  Image,
  QuantityInput,
  Container,
  ItemInfo,
  Controls,
  CartTotal
} from './ShoppingCart.styles';

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

 return (
    <PageContainer>
      <PageTitle>Shopping Cart</PageTitle>
      <PageContent>
        <Container>
          <ProductGrid>
            {loading ? (
              <div>Loading products...</div>
            ) : (
              products.map((product) => (
                <ProductCard key={product.id}>
                  <Image src={product.image} alt={product.title} />
                  <h3>{product.title}</h3>
                  <Price>${product.price}</Price>
                  <br />
                  <br />
                  <Button onClick={() => dispatch(addToCart(product))}>
                    Add to Cart
                  </Button>
                </ProductCard>
              ))
            )}
          </ProductGrid>

          <CartSection>
            <h2>Your Cart</h2>
            {cart.items.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              <>
                {cart.items.map((item) => (
                  <CartItem key={item.id}>
                    <Image src={item.image} alt={item.title} />
                    <ItemInfo>
                      <h4>{item.title}</h4>
                      <Price>${item.price}</Price>
                    </ItemInfo>
                    <Controls>
                      <QuantityInput
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => 
                          dispatch(updateQuantity({ 
                            id: item.id, 
                            quantity: Math.max(1, parseInt(e.target.value) || 1)
                          }))
                        }
                      />
                      <Button 
                        className="remove"
                        onClick={() => dispatch(removeFromCart(item.id))}
                      >
                        ×
                      </Button>
                    </Controls>
                  </CartItem>
                ))}
                <CartTotal>
                  <h3>Total: ${cart.total.toFixed(2)}</h3>
                  <Button onClick={() => dispatch(clearCart())}>
                    Clear Cart
                  </Button>
                </CartTotal>
              </>
            )}
          </CartSection>
        </Container>
      </PageContent>
    </PageContainer>
  );
};

export default ShoppingCart;