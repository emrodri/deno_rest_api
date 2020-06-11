import ProductsRepository from "../domain/productsRepository.ts";

const deleteProductAction = (
  repository: ProductsRepository,
  id: string,
): void => {
  repository.deleteProduct(id);
};

export default deleteProductAction;
