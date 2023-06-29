
import "./Container.css"


export const Container = ({ pokemon }) => {
    return (
      <div className="pokemon">
        {
          pokemon.map((val, idx) => {
            console.log(val, idx);
            return (
              <div key={idx}>
                
                <p>{val.name}</p>
              </div>
            );
          })
        }
      </div>
    );
  };