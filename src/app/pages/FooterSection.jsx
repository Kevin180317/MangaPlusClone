import Link from "next/link";
import React from "react";

function FooterSection() {
  return (
    <footer className="p-8" style={{ position: "fixed", bottom: 0, width: "100%", display: "flex", justifyContent: "center" }}>
      <div className="container">
        <div className="row">
          <div className="flex justify-center col-md-6">
            <p>Desarollado por Kevin Okhuysen</p>
          </div>
          <div className="flex justify-center">
            <h3 className="inline-block">
              Todo el contenido es gracias a {" "}
              <Link href="https://www.facebook.com/InventarioOculto" target="_blank">
                <span className="text-red-500 hover:underline">inventario oculto</span>
              </Link>
            </h3>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;