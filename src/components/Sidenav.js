import { BreadCrumb } from "./BreadCrumb";
import { Card } from "./Card";
import { CardBody } from "./CardBody";
import { CardHeader } from "./CardHeader";
import { DataTable } from "../modules/employe/components/DataTable";
import { DropdownLink } from "./DropdownLink";
import { Footer } from "../modules/core/components/layout/Footer";
import { InnerLink } from "./InnerLink";
import { SecondLink } from "./SecondLink";
import { SideMenuHeading } from "./SideMenuHeading";
import { SideNavFooter } from "./SideNavFooter";
import { SideNavLink } from "./SideNavLink";
import { Pagination } from "../modules/employe/components/Pagination";


export function Sidenav(props) {
  return (
    <div id="layoutSidenav">
      <div id="layoutSidenav_nav">
        <nav
          className="sb-sidenav accordion sb-sidenav-dark"
          id="sidenavAccordion"
        >
          <div className="sb-sidenav-menu">
            <div className="nav">
              <SideMenuHeading label="Core"></SideMenuHeading>
              <SecondLink label="Dashboard" />
              <SideMenuHeading label="Interface"></SideMenuHeading>
                <SideNavLink
                  label="Layouts"
                  target="#collapseLayouts"
                  controls="CollapseLayouts"
                >
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-columns"></i>
                  </div>
                </SideNavLink>
              <DropdownLink label1="Static Navigation" label2="Light Sidenav" />
              <SideNavLink
                label="Pages"
                target="#collapsePages"
                controls="CollapsePages"
              >
                <div className="sb-nav-link-icon">
                  <i className="fas fa-columns"></i>
                </div>
              </SideNavLink>
              <div
                class="collapse"
                id="collapsePages"
                aria-labelledby="headingTwo"
                data-bs-parent="#sidenavAccordion"
              >
                <nav
                  class="sb-sidenav-menu-nested nav accordion"
                  id="sidenavAccordionPages"
                >
                  <SideNavLink
                    label="Authentification "
                    target="#pagesCollapseAuth"
                    controls="pagesCollapseAuth"
                  />
                  <InnerLink
                    id="pagesCollapseAuth"
                    href1="login.html"
                    href2="Register"
                    href3="password.html"
                    label1="Login"
                    label2="Register"
                    label3="Forgot Password"
                  />
                  <SideNavLink
                    label="Error"
                    target="#pagesCollapseError"
                    controls="pagesCollapseError"
                  />
                  <InnerLink
                    id="pagesCollapseError"
                    href1="401.thml"
                    href2="404.html"
                    href3="500.html"
                    label1="401 pages"
                    label2="404 pages"
                    label3="500 pages"
                  />
                </nav>
              </div>
              <SideMenuHeading label="Addons"></SideMenuHeading>
              <SecondLink label="Charts" />
              <SecondLink label="Tables" />
            </div>
          </div>
          <SideNavFooter />
        </nav>
      </div>
      <div id="layoutSidenav_content">
        <main>
          <div className="container-fluid px-4">
            <h1 className="mt-4">Tables</h1>
            <BreadCrumb label1="Dashboard" label2="Tables"></BreadCrumb>
            <Card>
              <CardBody>
                DataTables is a third party plugin that is used to generate the
                demo table below. For more information about DataTables, please
                visit the &nbsp;
                <a target="_blank" href="https://datatables.net/" rel="noreferrer">
                  official DataTables documentation
                </a>.
              </CardBody>
            </Card>
            <Card>
              <CardHeader>
                <i className="fas fa-table me-1"></i>
                DataTable Example
              </CardHeader>
              <CardBody>
                <DataTable></DataTable>
                <Pagination/>

              </CardBody>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
