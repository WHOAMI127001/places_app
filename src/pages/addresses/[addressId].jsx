import axios from 'axios';

export const getServerSideProps = async ({ params: { addresseId } }) => {
  const { data: address } = await axios(
    `http://localhost:3000/api/addresses/${addresseId}`,
  )

  return {
    props: { address },
  }
}

const AddressId = ({address}) =>{
  return (
    <div>
      <h1>{address.name}</h1>
    </div>
  )
}

export default AddressId;