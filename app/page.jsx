
async function fecthUsers() {
  const res = await fetch("https://reqres.in/api/users")
  const data = await res.json()
  return data.data
}

async function IndexPage() {
  const users = await fecthUsers();
  console.log(users)
  return (
    <div>
      <h1>IndexPage</h1>
      <div>
        {JSON.stringify(users)}
      </div>
    </div>
  );
}

export default IndexPage