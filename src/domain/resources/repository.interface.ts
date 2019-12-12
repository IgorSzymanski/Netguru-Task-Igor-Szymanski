export interface IRepository<Resource, AddResourceDTO = Partial<Resource>> {
	add: (resource: AddResourceDTO) => Promise<Resource> | Resource
	listAll: () => Promise<Resource[]> | Resource[]
	findById: (id: string) => Resource | Promise<Resource>
}
