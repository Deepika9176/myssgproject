
export default function Home({ items }) {
    return (
      
          <div className="container mb-3">
             {items.map((item, index) => (
              <div className="card my-3" key={index}>
                <div className="card-body">
                    <p>{item.name}</p>
                    <p>{item.username}</p>
                    <p>{item.email}</p>
                    <p>{item.website}</p>
                </div>
              </div>
            ))}
          </div>  
           
       
    );
}
 
export async function getStaticProps() {
 
    
   //const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const response = await fetch('https://d3m6yk5xns2av8.cloudfront.net/data.json');
  const data = await response.json();
 
   
    return {
        props: { items: data, },
    };
}