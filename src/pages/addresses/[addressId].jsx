import axios from "axios"

export const getServerSideProps = async ({ params: { addressId } }) => {
  const { data: address } = await axios(
    `http://localhost:3000/api/addresses/${addressId}`,
  )

  return {
    props: { address },
  }
}
const AddressId = ({address}) =>(
    <div className="mt-32 text-center text-4xl">
      <h1>{address.type}</h1>
      <h1>{address.name}</h1>
      <h1>{address.street}</h1>
      <h1>{address.postalCode}</h1>
      <h1>{address.country}</h1>
      
    </div>
)

export default AddressId