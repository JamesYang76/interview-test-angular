using StudentApi.Models.Students;
using StudentApi.Services;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace StudentApi.Mediatr.Students
{
    public class AddStudentRequest : IRequest<AddStudentResponse>
    {
        public Student NewStudent { get; set; }

         public AddStudentRequest(Student Student) 
         {
            NewStudent = Student;
         }
    }

    public class AddStudentResponse
    {
        public bool Result { get; set; }
    }

    public class AddStudentsHandler : IRequestHandler<AddStudentRequest, AddStudentResponse>
    {
        private IStudentsService _studentsService;

        public AddStudentsHandler(IStudentsService studentsService)
        {
            _studentsService = studentsService;
        }

        public Task<AddStudentResponse> Handle(AddStudentRequest request, CancellationToken cancellationToken)
        {

            var response = new AddStudentResponse
            {
                Result = _studentsService.AddStudent(request.NewStudent)
            };

            return Task.FromResult(response);
        }
    }
}
