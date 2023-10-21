
import getBillboards from "@/actions/get-billboards";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  // const billboard = await getBillboards('9d29b4c9-496f-49b2-98e8-e2a4921616fe')
  const billboard = (await getBillboards()).filter(item => item.id == "9d29b4c9-496f-49b2-98e8-e2a4921616fe");
  //  console.log(billboard);
   
  return (
    <Container>
      <div className={`space-y-10 pb-10`}>
        <Billboard data={billboard[0]} />
      </div>
    </Container>
  )
};

export default HomePage;
