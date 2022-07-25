import { 
    IAddressRepository, ICityRepository, ICountryRepository, 
    ICustomerRepository, IInventoryRepository, IPaymentRepository, 
    IRentalRepository, IStaffRepository, IStoreRepository, IUserRepository } from '@/app/database/repositories';
import { 
    AddressRepository, CityRepository, CountryRepository, 
    CustomerRepository, InventoryRepository, PaymentRepository, 
    RentalRepository, StaffRepository, StoreRepository, UserRepository } from '@/app/database/repositories/implementation';
import { container } from 'tsyringe';

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);
container.registerSingleton<IInventoryRepository>("InventoryRepository", InventoryRepository);
container.registerSingleton<IRentalRepository>("RentalRepository", RentalRepository);
container.registerSingleton<IPaymentRepository>("PaymentRepository", PaymentRepository);
container.registerSingleton<IStaffRepository>("StaffRepository", StaffRepository);
container.registerSingleton<ICustomerRepository>("CustomerRepository", CustomerRepository);
container.registerSingleton<IAddressRepository>("AddressRepository", AddressRepository);
container.registerSingleton<ICityRepository>("CityRepository", CityRepository);
container.registerSingleton<ICountryRepository>("CountryRepository", CountryRepository);
container.registerSingleton<IStoreRepository>("StoreRepository", StoreRepository);