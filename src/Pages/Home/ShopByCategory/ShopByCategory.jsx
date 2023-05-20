import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const ShopByCategory = () => {

    return (
        <div className='my-12'>
            <h2 className='text-4xl font-bold font-mono text-center mb-5'>Shop Sports Toys By Category</h2>
            <div className='flex justify-center'>
                <Tabs>
                    <TabList>
                        <Tab>Indoor Sports</Tab>
                        <Tab>Outdoor Sports</Tab>
                        <Tab>Water Sports</Tab>
                    </TabList>

                    <TabPanel>
                        <h2 className='text-3xl font-bold font-mono text-center mt-8 text-primary'>Indoor Sports</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2 className='text-3xl font-bold font-mono text-center mt-8 text-primary'>Outdoor Sports</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2 className='text-3xl font-bold font-mono text-center mt-8 text-primary'>Water Sports</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default ShopByCategory;
