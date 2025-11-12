import ProductCard from '../ProductCard'
import gramophoneImg from '@assets/generated_images/Vintage_brass_gramophone_70d3cb5d.png'

export default function ProductCardExample() {
  return (
    <div className="p-8">
      <ProductCard
        id="1"
        name="Vintage Brass Gramophone"
        price={485}
        image={gramophoneImg}
        condition="Excellent"
        category="Audio Equipment"
      />
    </div>
  )
}
