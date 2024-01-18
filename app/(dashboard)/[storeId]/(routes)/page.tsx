import prismadb from "@/lib/prismadb";

interface DashboadPageProps {
  params: {
    storeId: string
  }
}

const DashBoardPage: React.FC<DashboadPageProps> = async ({ 
  params
}) => {
  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId
    }
  })

  return (
    <div>
      Active Store: {store?.name}
    </div>
  )
}

export default DashBoardPage;