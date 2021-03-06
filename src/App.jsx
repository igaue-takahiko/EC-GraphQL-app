import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { checkUserSession } from './redux/User/actions';
import './default.scss';
import 'aos/dist/aos.css';

import { WithAuth, WithAdminAuth } from './hoc';
import { AdminToolbar } from './components';

import {
    AdminLayout,
    DashBoardLayout,
    HomePageLayout,
    MainLayout,
} from './Layouts';

import {
    Admin,
    Cart,
    HomePage,
    Recovery,
    Registration,
    Login,
    Order,
    Payment,
    DashBoard,
    Search,
    ProductDetails,
} from './pages';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(checkUserSession)
    },[dispatch]);

    return (
        <div className="App">
            <AdminToolbar />
            <Switch>
                <Route exact path="/" render={() => (
                    <HomePageLayout>
                        <HomePage />
                    </HomePageLayout>
                )} />
                <Route exact path="/search" render={() => (
                    <MainLayout>
                        <Search />
                    </MainLayout>
                )} />
                <Route path="/search/:filterType" render={() => (
                    <MainLayout>
                        <Search />
                    </MainLayout>
                )} />
                <Route path="/product/:productID" render={() => (
                    <MainLayout>
                        <ProductDetails />
                    </MainLayout>
                )} />
                <Route path="/cart" render={() => (
                    <MainLayout>
                        <Cart />
                    </MainLayout>
                )} />
                <Route path="/payment" render={() => (
                    <WithAuth>
                        <MainLayout>
                            <Payment />
                        </MainLayout>
                    </WithAuth>
                )} />
                <Route path="/registration" render={() => (
                    <MainLayout>
                        <Registration />
                    </MainLayout>
                )} />
                <Route path="/login" render={() => (
                    <MainLayout>
                        <Login />
                    </MainLayout>
                )} />
                <Route path="/recovery" render={() => (
                    <MainLayout>
                        <Recovery />
                    </MainLayout>
                )} />
                <Route path="/dashboard" render={() => (
                    <WithAuth>
                        <DashBoardLayout>
                            <DashBoard />
                        </DashBoardLayout>
                    </WithAuth>
                )} />
                <Route path="/order/:orderID" render={() => (
                    <WithAuth>
                        <DashBoardLayout>
                            <Order />
                        </DashBoardLayout>
                    </WithAuth>
                )} />
                <Route path="/admin" render={() => (
                    <WithAdminAuth>
                        <AdminLayout>
                            <Admin />
                        </AdminLayout>
                    </WithAdminAuth>
                )} />
            </Switch>
        </div>
    );
}

export default App;
